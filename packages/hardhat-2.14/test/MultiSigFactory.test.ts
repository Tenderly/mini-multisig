import { fail } from "assert";
import { expect } from "chai";
import { ethers, tenderly } from "hardhat";
import {
  MultiSigFactory,
  MultiSigWallet,
  MultiSigWallet__factory,
} from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

async function verifyMultisig(address: string) {
  await tenderly.verify({ name: "MultiSigWallet", address });
}

describe("MultiSigFactory", function () {
  let factory: MultiSigFactory;
  let multiSig: MultiSigWallet;
  let owner: SignerWithAddress;
  let otherUser: SignerWithAddress;

  beforeEach(async () => {
    [owner, otherUser] = await ethers.getSigners();

    const MultiSigFactoryFactory = await ethers.getContractFactory(
      "MultiSigFactory",
      owner,
    );
    factory = await MultiSigFactoryFactory.deploy();

    await factory.deployed();

    await tenderly.verify({
      name: "MultiSigFactory",
      address: factory.address,
    });
  });

  it("should deploy a new MultiSig contract", async function () {
    const owners = [owner.address, otherUser.address];
    const signaturesRequired = 2;

    await factory.create(1, owners, signaturesRequired);

    const multiSigAddress = await factory.multiSigs(0);
    multiSig = MultiSigWallet__factory.connect(multiSigAddress, owner);

    // const ownerAddresses = await multiSig.owners();
    const requiredSignatures = await multiSig.signaturesRequired();

    // expect(ownerAddresses).to.deep.equal(owners);
    expect(requiredSignatures).to.equal(signaturesRequired);
  });

  it("should emit Create and Owners events", async function () {
    const owners = [owner.address, otherUser.address];
    const signaturesRequired = 2;

    const tx = await factory.create(1, owners, signaturesRequired);
    const receipt = await tx.wait();

    expect(receipt).not.be.null;

    if (!receipt) {
      fail("Receipt null");
    }

    expect(receipt.logs).to.have.lengthOf(4);
    const factoryAddress = factory.address;

    const [createEvent, ownersEvent] = receipt.logs
      .filter((log) => log.address == factoryAddress)
      .map((log) => {
        return factory.interface.parseLog({
          data: log.data,
          topics: [...log.topics],
        });
      });

    if (!createEvent || !ownersEvent) {
      fail("Events missing");
    }
    expect(createEvent.args?.contractAddress).to.not.equal(
      ethers.utils.hexZeroPad("0x0", 20),
    );

    await verifyMultisig(createEvent.args?.contractAddress as string);

    expect(createEvent.name).to.equal("Create");
    expect(createEvent.args?.creator).to.equal(owner.address);
    expect(createEvent.args?.owners).to.deep.equal(owners);
    expect(createEvent.args?.signaturesRequired).to.equal(signaturesRequired);

    expect(ownersEvent.name).to.equal("Owners");
    expect(ownersEvent.args?.owners).to.deep.equal(owners);
    expect(ownersEvent.args?.signaturesRequired).to.equal(signaturesRequired);
  });

  it("should retrieve the number of MultiSig contracts", async function () {
    const count = await factory.numberOfMultiSigs();
    expect(count).to.equal(0);

    const owners = [owner.address, otherUser.address];
    const signaturesRequired = 2;
    await factory.create(1, owners, signaturesRequired);

    const newCount = await factory.numberOfMultiSigs();
    expect(newCount).to.equal(1);
  });

  it("should retrieve the MultiSig contract details", async function () {
    const owners = [owner.address, otherUser.address];
    const signaturesRequired = 2;
    await factory.create(1, owners, signaturesRequired);

    const [multiSigAddress, requiredSignatures, balance] =
      await factory.getMultiSig(0);

    expect(multiSigAddress).to.not.equal(ethers.utils.hexZeroPad("0x0", 20));
    expect(requiredSignatures).to.equal(signaturesRequired);
    expect(balance).to.equal(0); // Balance will be 0 as no Ether is sent to the MultiSig contract
  });
});
