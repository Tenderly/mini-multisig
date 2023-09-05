import { Page } from "@playwright/test";
import * as metamask from "@synthetixio/synpress/commands/metamask";
import { expect, test } from "../fixtures";
import { approveTx as approveTransactionInMetaMask } from "../metamask-extensions";

type PageParams = { page: Page };
type MultiSig = { name: string; owners: string[]; signaturesRequired: number };

const DEFAULT_OWNERS = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0xE58b9ee93700A616b50509C8292977FA7a0f8ce1"
];

const MM_ACCOUNT_3_PK =
  "bd3a24f40aa009e82b67af2ce17c9e2c794f1958d802c9481bc551ef76e8f03f";

test("Test connecting another account", async ({ page }) => {
  await connectToTenderly({ page });
  await metamask.switchAccount("Account 1");
  await metamask.switchAccount("Account 2");
});

test("Test approving and executing a transaction", async ({ page }) => {
  await connectToTenderly({ page });
  await metamask.switchAccount("Account 1");

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

  await metamask.switchAccount("Account 2");

  await approveTransaction(0, page);

  await metamask.switchAccount("Account 3");

  await fundMultiSig(page);

  await executeTransaction(0, page);
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
  await metamask.acceptAccess({ allAccounts: true });
}
async function connectToTenderly({ page }: PageParams) {
  await metamask.importAccount(MM_ACCOUNT_3_PK);
  await page.goto("http://localhost:3000/");
  await connectRainbowKitToMM({ page });
  // take the chain
  await page.getByTestId("rk-chain-button").click();
  await page.getByTestId("rk-chain-option-736031").click();
  await metamask.allowToAddAndSwitchNetwork();
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
