# Mini-MultiSig

This is an educational repo which demonstrates how you can test your smart contract using Tenderly DevNets for testing
infrastructure, when running Hardhat Smart Contract tests, and Synpress for End-to-End dapp UI testing.

The Mini-MultiSig dapp is a simplified MultiSig management dapp, allowing MultiSigs creation and management, including
funding the MultiSig, submitting, approving and executing transactions.

## DevNets or TestNets

- **DevNets** are Tenderly-managed infrastructure with 90 mins lifetime window, that replicate
  public networks, and come with network fixtures in form of YAML configuration. Use them for shorter development
  sessions, smart contracts testing, CI, and end-to-end testing. [Try out **DevNets**](#using-a-devnet-for-testing)
- **TestNets** are Tenderly-managed infrastructure with unlimited lifetime, that replicate public networks, have
  continuous state sync and a public block explorer. Use them for dapp staging, testing, and contract audits.
  [Try out **TestNets**](#using-a-testnet-for-dapp-staging)

Both come with integrated debugger, transaction simulator, and unlimited faucet.

[Try out **DevNets**](#using-a-devnet-for-testing)
|
[DevNets Docs](https://docs.tenderly.co/devnets/intro-to-devnets)
|
[Try out **TestNets**](#using-a-testnet-for-dapp-staging)
|
[TestNets Demo Video](https://www.loom.com/share/29ccbe3a40d54aaabed738b5b96a4fdd?sid=92b8a716-4ef2-48bc-9a6f-79b551a6e6c6)

> [!NOTE]
> Tenderly TestNets are in Early access. You can apply via [Early Access Form]().

## Using a DevNet for testing

1. Create a new project in Tenderly and name it: `Mini Multisig`.
2. Create a new DevNet Template, and name it: `Mini Multisig Tests`. (Devnets -> Create Template) If you need help, here
   is a link.
3. Copy and paste the following code for your YAML file:

```yaml
version: v0
template:
  name: mini-multisig-tests
  block-number: latest
  visibility: TEAM
  network-id: 1
  execution:
    chain-config:
      chain-id: 736031
    block-gas-limit: 10000000
    base-fee-per-gas: 1000000000

  ## Wallets used by E2E tests. These are pre-shared accounts
  wallets:
    - private-key: 0xfa5568408b1f994003a17d4c91a7b2a71d7ea1175e035753167226c62e0f4db5
      balance: 1000000000000000000
    - private-key: 0xba006e33f250b15f5e276081b16c87c0769d08ec528ac50e0467cd83cd4ae1a6
      balance: 1000000000000000000
    - private-key: 0xcca4ab4bc23486b65b0f5794e3fbb9ea401e9867d801e2c254fe2cd5e89a9f85
      balance: 1000000000000000000
  display-name: mini-multisig-tests
```

### Configure HardHat and Tenderly CLI

1. Open up `packages/hardhat/hardhat.config.ts` and add your `username` and `project` (mini-multisig) to
   the `config.tenderly object`.

> [!NOTE]
> If using organization account, set your organization name to the `tenderly.username` field.

2. Check if you have tenderly-cli set up

```bash
tenderly whoami
```

If not, follow instructions for [installation and login](https://github.com/Tenderly/tenderly-cli#installation).

3. Spawn a new Tenderly Devnet from the CLI with the following command:

```bash
cd packages/hardhat
npm run tenderly:devnet:new mini-multisig mini-multisig-tests 736031
```

This command spawns a fresh DevNet instance, configures hardhat to use the new RPC URL, and configures frontend to use
the same (via `packages/frontend/tenderly.json`)

### Test and Deploy the MultiSigFactory

1. To run the hardhat tests run:

```bash
cd packages/hardhat
npx hardhat test --network tenderly
```

2. To deploy the `MultiSigFactory` run:

```bash
npx hardhat run scripts/deploy.ts --network tenderly
```

The `deploy.ts` script configures frontend with `packages/frontend/deployments.json`, which hold the address
of `MultiSigFactory`, as well as ABI for `MultiSigFactory` and `MultiSigWallet`.

### Run the E2E tests

End-to-end tests are implemented using [Synpress](https://github.com/Synthetixio/synpress), which relies on Cypress or
Playwright, and provides an API for interacting with MetaMask.

Run the following commands to fund accounts used by test instance of MetaMask and run end-to-end tests.

```bash
cd packages/hardhat
npx hardhat tenderly:fund --amount 100 \
    --addresses 0xC305f4b9925b9eC6b3D0FCC42B7b22F1245A5011,0xdb623c0f74d4ed5af4b254327147c4ac7e5d3fac,0x08B108B490389F158b3040faA1705339633b2455
cd ../frontend
npm run test
cd ../hardhat
```

## Using a TestNet for dapp staging

1. Create a testnet in Tenderly Dashboard with arbitrary value of VIRTUAL_TESTNET_CHAIN_ID
2. Run the following command (replace the `VIRTUAL_TESTNET_RPC` with RPC URL and `VIRTUAL_TESTNET_CHAIN_ID` with the
   chain ID)

```bash
cd packages/hardhat
npm run tenderly:testnet:use \
   mini-multisig \
   VIRTUAL_TESTNET_CHAIN_ID \
   VIRTUAL_TESTNET_RPC
```

This command will configure hardhat to deploy to testNet, and set the RPC URL for the dapp
UI (`packages/frontend/tenderly.json`)

### Fund accounts

To fund accounts, either use the dashboard faucet or the following command (replacing the funded addresses with your
own). Note: addresses must be comma-delimited (no white-space):

```bash
cd packages/hardhat
npx hardhat tenderly:fund --amount 100 \
    --addresses 0xC305f4b9925b9eC6b3D0FCC42B7b22F1245A5011,0xdb623c0f74d4ed5af4b254327147c4ac7e5d3fac,0x08B108B490389F158b3040faA1705339633b2455
```

### Configure HardHat

Open up `packages/hardhat/hardhat.config.ts` and add your `username` and `project` (mini-multisig) to
the `config.tenderly object`.

### Deploy on TestNet

```bash
cd packages/hardhat
npx hardhat run scripts/deploy.ts --network tenderly
```