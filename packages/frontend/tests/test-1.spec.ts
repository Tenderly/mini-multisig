import { Page } from "@playwright/test";
import * as metamask from "@synthetixio/synpress/commands/metamask";
import { expect, test } from "../fixtures";
import { approveTx as approveTransactionInMetaMask } from "../metamask-extensions";
import { test as base, chromium, type BrowserContext } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const DEFAULT_OWNERS = [
  // correspond to MM_ACCOUNT_1_PK, MM_ACCOUNT_2_PK, MM_ACCOUNT_3_PK
  "0xC305f4b9925b9eC6b3D0FCC42B7b22F1245A5011",
  "0xdb623c0f74d4ed5af4b254327147c4ac7e5d3fac",
  "0x08B108B490389F158b3040faA1705339633b2455",
];

type PageParams = { page: Page };
type MultiSig = { name: string; owners: string[]; signaturesRequired: number };

test("Test connecting another account", async ({ page }) => {
  await connectToTenderly({ page });
  await metamask.switchAccount("Account 1");
  await metamask.switchAccount("Account 2");
});

base("Connects too dapp", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  console.log("Dapp working right?");
  await expect(page.getByTestId("rk-connect-button")).toBeAttached();
});

test("Test approving and executing a transaction", async ({ page }) => {
  console.log("Metamask setup complete");
  await connectToTenderly({ page });
  await metamask.switchAccount("Account 3");

  await createMultiSig({
    page,
    multiSig: {
      name: "Awesome MS",
      owners: DEFAULT_OWNERS,
      signaturesRequired: 2,
    },
  });
  await proposeTransaction("Awesome MS", page, {
    txName: "Profit",
    txValue: 55555,
    txData: "0x",
  });

  openTransaction(0, page);

  await approveTransaction(0, page);

  await metamask.switchAccount("Account 4");

  await approveTransaction(0, page);

  await metamask.switchAccount("Account 5");

  await fundMultiSig(page);

  await executeTransaction(0, page);

  // TODO: add assertions
});

async function fundMultiSig(page: Page) {
  await page.getByTestId("ms-fund-btn").click();
  await page.getByTestId("ms-fund-confirm-btn").click();
  await approveTransactionInMetaMask({ page });
}

async function executeTransaction(txIdx: number, page: Page) {
  await page.getByTestId("ms-tx-execute").click();
  await page.getByTestId("ms-tx-execute-confirm").click();
  await approveTransactionInMetaMask({ page });
}

/**
 * Opens the TX with current index. After TX is open it will fail
 * @param txIndex
 * @param page
 */
async function openTransaction(txIndex: number, page: Page) {
  await page
    .locator(`[data-testid='ms-transaction-${txIndex}'] button`)
    .click();
}

async function approveTransaction(txIdx: number, page: Page) {
  await page.getByTestId("ms-tx-approve").click();
  await page.getByTestId("ms-tx-approve-confirm").click();
  await approveTransactionInMetaMask({ page });
}

async function proposeTransaction(
  msName: string,
  page: Page,
  {
    txName,
    txValue,
    txData,
  }: { txName: string; txValue: number; txData: string },
) {
  await page.getByTestId(`ms-multisig-btn-${msName}`).click();
  await page.getByTestId("ms-propose-tx-btn").click();

  await page
    .getByPlaceholder("to")
    .fill("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");

  await page.getByLabel("Data").fill(txData);
  await page.getByLabel("Name").fill(txName);
  await page.getByLabel("Value").fill(txValue.toString());
  await page.getByText("Review").click();
  await expect(page.getByText("Send")).toBeEnabled();
  await page.getByText("Send").click();
  await approveTransactionInMetaMask({ page });
}

async function connectRainbowKitToMM({ page }: PageParams) {
  await page.getByTestId("rk-connect-button").click();
  await page.getByTestId("rk-wallet-option-metaMask").click();
  await metamask.switchToMetamaskIfNotActive();
  await metamask.acceptAccess({ allAccounts: true });
}
async function connectToTenderly({ page }: PageParams) {
  await page.goto("http://localhost:3000/");
  console.log("Connecting to metamask and adding Tenderly Devnet");
  await connectRainbowKitToMM({ page });
  await page.getByTestId("rk-chain-button").click();
  await page.getByTestId("rk-chain-option-736031").click();
  await metamask.allowToAddAndSwitchNetwork();
  console.log("Connected to Tenderly Devnet");
}

async function createMultiSig({
  page,
  multiSig,
}: PageParams & { multiSig: MultiSig }) {
  await page.getByTestId("ms-create-multisig").click();
  await page.getByLabel("Name").fill(multiSig.name);
  await page.getByLabel("Owners").fill(multiSig.owners.join("\n"));
  await page
    .getByTestId("ms-input-signatures-required")
    .fill(`${multiSig.signaturesRequired}`);
  await page.getByTestId("ms-multisig-review").click();
  await page.getByTestId("ms-multisig-create").click();
  await approveTransactionInMetaMask({ page });
}
