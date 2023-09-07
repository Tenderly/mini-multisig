// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./MultiSigFactory.sol";

contract MultiSigWallet {
  // Events
  event Deposit(address indexed sender, uint amount, uint balance);

  event Owner(address indexed owner, bool added);

  event SubmitTransaction(
    address indexed owner,
    uint indexed txIndex,
    address indexed to,
    uint value,
    bytes data
  );
  event ConfirmTransaction(address indexed owner, uint indexed txIndex);
  event RevokeConfirmation(address indexed owner, uint indexed txIndex);
  event ExecuteTransaction(
    address indexed owner,
    address payable to,
    uint256 value,
    bytes data,
    uint256 nonce,
    bytes32 hash,
    bytes result
  );

  MultiSigFactory private multiSigFactory;

  // List of owners of the wallet
  address[] public owners;
  // Mapping to allow for easy checks if someone is an owner
  mapping(address => bool) public isOwner;
  // Number of confirmations required to execute a transaction
  uint8 public signaturesRequired;
  uint public nonce;
  uint public chainId;

  // Tx object
  struct Transaction {
    address payable to;
    uint value;
    bytes data;
    bool executed;
    uint8 numConfirmations;
  }

  // mapping from tx index => owner => bool
  // use this to check if some transaction is confirmed by some person
  mapping(uint => mapping(address => bool)) public isConfirmed;

  // List of all tracked transactions
  Transaction[] public transactions;

  // Helper functions
  modifier onlyOwner() {
    require(isOwner[msg.sender], "not owner");
    _;
  }

  modifier onlySelf() {
    require(msg.sender == address(this), "Not Self");
    _;
  }

  modifier txExists(uint _txIndex) {
    require(_txIndex < transactions.length, "tx does not exist");
    _;
  }

  modifier notExecuted(uint _txIndex) {
    require(!transactions[_txIndex].executed, "tx already executed");
    _;
  }

  modifier notConfirmed(uint _txIndex) {
    require(!isConfirmed[_txIndex][msg.sender], "tx already confirmed");
    _;
  }

  modifier requireNonZeroSignatures(uint _signaturesRequired) {
    require(_signaturesRequired > 0, "Must be non-zero sigs required");
    _;
  }

  constructor(
    uint256 _chainId,
    address[] memory _owners,
    uint8 _signaturesRequired,
    address _factory
  ) payable requireNonZeroSignatures(_signaturesRequired) {
    require(_owners.length > 0, "owners required");

    chainId = _chainId;
    multiSigFactory = MultiSigFactory(_factory);

    for (uint i = 0; i < _owners.length; i++) {
      address owner = _owners[i];

      require(owner != address(0), "invalid owner");
      require(!isOwner[owner], "owner not unique");

      isOwner[owner] = true;
      owners.push(owner);
      emit Owner(owner, isOwner[owner]);
    }

    signaturesRequired = _signaturesRequired;
  }

  receive() external payable {
    emit Deposit(msg.sender, msg.value, address(this).balance);
  }

  function submitTransaction(
    address payable _to,
    uint _value,
    bytes memory _data
  ) public onlyOwner {
    uint txIndex = transactions.length;

    transactions.push(
      Transaction({
        to: _to,
        value: _value,
        data: _data,
        executed: false,
        numConfirmations: 0
      })
    );

    emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
  }

  function confirmTransaction(
    uint _txIndex
  )
    public
    onlyOwner
    txExists(_txIndex)
    notExecuted(_txIndex)
    notConfirmed(_txIndex)
  {
    Transaction storage transaction = transactions[_txIndex];
    transaction.numConfirmations += 1;
    isConfirmed[_txIndex][msg.sender] = true;

    emit ConfirmTransaction(msg.sender, _txIndex);
  }

  function executeTransaction(
    uint _txIndex
  ) public onlyOwner txExists(_txIndex) notExecuted(_txIndex) {
    Transaction storage transaction = transactions[_txIndex];

    require(
      transaction.numConfirmations >= signaturesRequired,
      "insufficient number of confirmations, cannot execute tx"
    );

    transaction.executed = true;

    (bool success, bytes memory result) = transaction.to.call{
      value: transaction.value
    }(transaction.data);
    require(success, "tx failed");

    bytes32 _hash = getTransactionHash(nonce, transaction);

    emit ExecuteTransaction(
      msg.sender,
      transaction.to,
      transaction.value,
      transaction.data,
      nonce,
      _hash,
      result
    );
  }

  function revokeConfirmation(
    uint _txIndex
  ) public onlyOwner txExists(_txIndex) notExecuted(_txIndex) {
    Transaction storage transaction = transactions[_txIndex];

    require(isConfirmed[_txIndex][msg.sender], "tx not confirmed");

    transaction.numConfirmations -= 1;
    isConfirmed[_txIndex][msg.sender] = false;

    emit RevokeConfirmation(msg.sender, _txIndex);
  }

  function getOwners() public view returns (address[] memory) {
    return owners;
  }

  function getTransactionCount() public view returns (uint) {
    return transactions.length;
  }

  function getTransaction(
    uint _txIndex
  )
    public
    view
    returns (
      address to,
      uint value,
      bytes memory data,
      bool executed,
      uint8 numConfirmations
    )
  {
    Transaction storage transaction = transactions[_txIndex];

    return (
      transaction.to,
      transaction.value,
      transaction.data,
      transaction.executed,
      transaction.numConfirmations
    );
  }

  function getTransactionHash(
    uint256 _nonce,
    Transaction memory transaction
  ) public view returns (bytes32) {
    return
      keccak256(
        abi.encodePacked(
          address(this),
          chainId,
          _nonce,
          transaction.to,
          transaction.value,
          transaction.data
        )
      );
  }

  function addSigner(
    address newSigner,
    uint8 newSignaturesRequired
  ) public onlySelf requireNonZeroSignatures(newSignaturesRequired) {
    require(newSigner != address(0), "addSigner: zero address");
    require(!isOwner[newSigner], "addSigner: owner not unique");

    isOwner[newSigner] = true;
    owners.push(newSigner);
    signaturesRequired = newSignaturesRequired;

    emit Owner(newSigner, isOwner[newSigner]);
    multiSigFactory.emitOwners(address(this), owners, newSignaturesRequired);
  }

  function removeSigner(
    address oldSigner,
    uint8 newSignaturesRequired
  ) public onlySelf requireNonZeroSignatures(newSignaturesRequired) {
    require(isOwner[oldSigner], "removeSigner: not owner");

    _removeOwner(oldSigner);
    signaturesRequired = newSignaturesRequired;

    emit Owner(oldSigner, isOwner[oldSigner]);
    multiSigFactory.emitOwners(address(this), owners, newSignaturesRequired);
  }

  function _removeOwner(address _oldSigner) private {
    isOwner[_oldSigner] = false;
    uint256 ownersLength = owners.length;
    address[] memory poppedOwners = new address[](owners.length);
    for (uint256 i = ownersLength - 1; i >= 0; i--) {
      if (owners[i] != _oldSigner) {
        poppedOwners[i] = owners[i];
        owners.pop();
      } else {
        owners.pop();
        for (uint256 j = i + 1; j <= ownersLength - 1; j++) {
          owners.push(poppedOwners[j]);
        }
        return;
      }
    }
  }

  function updateSignaturesRequired(
    uint8 newSignaturesRequired
  ) public onlySelf requireNonZeroSignatures(newSignaturesRequired) {
    signaturesRequired = newSignaturesRequired;
  }
}
