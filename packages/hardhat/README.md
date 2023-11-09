<h1 align="center">Tenderly Multi-Sig Wallet With Hardhat & Synpress
</h1>This is an educational repo which demonstrates how you can test your smart contract using Tenderly DevNets and Synpress for End-to-End testing.<br>

By following along, you will learn how to verify and deploy your smart contracts using the Tenderly CLI, execute Hardhat tests, use Synpress & Playwright, run the Tenderly Debugger, and implement Continuous Integration tests with Github Actions to make sure it all works.


<a href="#introduction">**Introduction**</a> · 
<a href="#setup">**Setup**</a> 
<a href="#deployment">**Deployment**</a>
<a href="#testing">**Testing**</a>
 <a href="#Continuous Integration/Development (CI/CD)">**Integration**</a>
 <a href="#Other Useful Scripts">**Useful Scripts**</a> · 

# Introduction
Tenderly [DevNets](https://docs.tenderly.co/devnets/intro-to-devnets) enable you to deploy, test, and integrate smart contacts on the latest network state. Powered by the Tenderly Simulation Infrastructure, this feature allows you to have your own private simulated network which you can share with your team.

In addition, [Synpress](https://www.google.com/) allows you to perform end-to-end tests blah blah blah.

The following technologies are used:

| Technology | Description |
| ---------- | ----------- |
| **Tenderly DevNets** | Simulated Network for Testing |
| **Synpress & Playwright** | E2E Testing Framework |
| **Hardhat** | Local Testing |
| **Github Actions** | Continuous Integration (CI/CD) |
| **Multi-Sig-Wallet** | Ethereum Smart Contract |
| **Metamask & Rainbow Wallet** | Web3 Wallets |

# Setup
To set the project up, you will just need a new Tenderly Account.

## 1. Get Your Tenderly Account Set Up

1. First, you need a Tenderly account. To set up your account, [register by following a few simple steps](https://dashboard.tenderly.co/register).
2. Go [here](https://dashboard.tenderly.co/account/authorization) and click the `Generate Access Token` button. Create your Token and record the value for later use when we set up GitHub Actions and Continuous Integration.
3. Next, install the [Tenderly CLI](https://github.com/Tenderly/tenderly-cli) and login with:

```
tenderly login
```

## 2\. Set up a DevNet Template

1. Create a new **project** in Tenderly and name it: `Mini Multisig`.
2. Create a new DevNet **Template**, and name it: `Mini Multisig Test`. (Devnets -> Create Template) If you need help, [here](https://docs.tenderly.co/devnets/setting-up-devnets-for-local-development) is a link.
3. Copy and paste the following code for your **YAML** file:

```
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
# Deployment
## 3. Spawn Your DevNet & Deploy with Hardhat

1. Run the command:

```
tenderly whoami
```

2. Open up `packages/hardhat/hardhat.config.ts` and add your `username` and `project` slug (mini-multisig) to the `config.tenderly` object.
3. Spawn a new Tenderly Devnet from the CLI using:

```
cd packages/hardhat
npm run tenderly:devnet:new mini-multisig mini-multisig-tests 736031
```

4. Deploy the contracts:

```
npx hardhat run scripts/deploy.ts --network tenderly
```
> **NOTE 1:** When we run the `tenderly:devnet:new` script, the file`/app/tenderly.json` is produced, which allows us to pass the DevNet URL and ChainID to the frontend. The RPC URL and freshly staged contract addresses will be present there.  

> **NOTE 2:** When we run the `scripts/deploy.ts` script, an ABI (Application Binary Interface) file gets created as a result. This file, `frontend/app/deployment.json`, contains the necessary interface (functions and data) which allow us to interact with `smart contracts—packages/hardhat/contracts/MultiSigFactory.sol` and `packages/hardhat/contracts/MultiSigWallet.sol`

# Testing

## 4\. Run the Hardhat tests

> **NOTE**: the tests will fail if we run them as-is. This is intentional, and by design, as this repo is used in workshops where we introduce a known bug for students to debug. For our purposes, we should remove it prior to proceeding.

1. To make the test run, please open up `packages/hardhat/contracts/MultiSigWallet.sol` and locate line 159 where we have: `transaction.numConfirmations > signaturesRequired`.
2. Change the expression by replacing line 159 with this line: `transaction.numConfirmations >= signaturesRequired` (changes the > to >=).
3. Execute the following:

```
cd packages/hardhat
npx hardhat test --network tenderly
```

## 5\. Run the E2E tests \(Synpress\)

Execute the following:

```
cd packages/frontend
npm run test
```

# Continuous Integration/Development (CI/CD)

## 6\. BONUS: Set up Continuous Integration for Your Project

> This isn't really anything specific to Tenderly, but we thought it would be nice to add this here as well, for those interested in setting up your CI/CD environment using GitHub Actions. Doing so will allow you to see this project and the E2E testing as part of CI/CD in full.

1. Create a new folder in your project (create at the root level) named `.github/workflows`.
2. Inside the directory, create a new file named `tests.yaml`.
3. Paste the following into the `tests.yaml` file, and fill in the `TENDERLY_ACCOUNT_ID` with your username, replacing the "PASTE\_YOUR\_USERNAME" field:

```
name: Smart Contract CI

on:
  push:
    branches:
      - main
      - workshop-starter
  pull_request:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Install Tenderly CLI
        run: curl https://raw.githubusercontent.com/Tenderly/tenderly-cli/master/scripts/install-linux.sh | sudo sh

      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install Hardhat dependencies
        run: npm install
        working-directory: packages/hardhat

      - name: Run Hardhat tests
        run: npm run test:devnet
        working-directory: packages/hardhat
        env:
          TENDERLY_ACCESS_KEY: ${{ secrets.TENDERLY_ACCESS_TOKEN }}
          TENDERLY_PROJECT_SLUG: mini-multisig # your project slug
          TENDERLY_DEVNET_TEMPLATE: mini-multisig-tests # your devnet template slug
          TENDERLY_ACCOUNT_ID: PASTE_YOUR_USERNAME # your username or organization name
```

4. Go to your GitHub repository, and create a Secret (Settings → Secrets and Variables → Actions)
5. Click `New repository secret`. Make sure the `Name` field is set to the following: `TENDERLY_ACCESS_TOKEN.` Then for the `Secret` field, supply any secret you like.
6. Paste your Tenderly Access Token in to GitHub secret, save, and close the popup in the dashboard. (You did this in the setup part of this repo)
7. Push your changes by executing the following:

```
cd ../..
git add .
git commit -m "Configure GitHub Actions and running HardHat tests"
git push
```

8. Head over to GitHub and select the GitHub Actions tab. You should see your build running.

# Other Useful Scripts
Last but not least, here are a two other notable scripts we have built that you might find save you time by combining steps.

| Script | Description |
| ---------- | ----------- |
| "stage": "npm run devnet:minimultisigtests:new && hardhat run scripts/deploy.ts --network tenderly",| This is a staging script which creates a new DevNet and deploys the multi-sig contracts to it.  |
|"test:devnet": "npm run devnet:minimultisigtests:new && hardhat test --network tenderly"| This is a testing script which creates a new DevNet and runs the Hardhat tests.|




# Author

* Travis Richardson ([@tleerichardson](https://twitter.com/tleerichardson))