import { approveTx, deactivateCustomNonce } from "../metamask-extensions";
import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";
import { Page } from "@playwright/test";

type PageParams = { page: Page };
type MultiSig = { name: string; owners: string[] };

const DEFAULT_OWNERS = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
];

test("Test Creating a Wallet", async ({ page }) => {
  await deactivateCustomNonce(false);

  await connectToTenderly({ page });

  await createMultiSig({
    page,
    multiSig: {
      name: "My Crew",
      owners: DEFAULT_OWNERS,
    },
  });

  await page.getByTestId("ms-multisig-btn-My Crew").click();

  await expect(page.getByTitle("My Crew")).toBeAttached();
});

test("Test submitting a transaction", async ({ page }) => {
  await connectToTenderly({ page });
  await createMultiSig({
    page,
    multiSig: { name: "Awesome MS", owners: DEFAULT_OWNERS },
  });
  await page.getByTestId("ms-multisig-btn-Awesome MS").click();
  await page.getByTestId("ms-propose-tx-btn").click();
  await page.getByPlaceholder("to").fill("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"); 
  await page.getByLabel("Data").fill("0x0"); 
  await page.getByLabel("Name").fill("Profit"); 
  await page.getByLabel("Value").fill("55555");
  await page.getByText("Review").click();
  await expect(page.getByText("Send")).toBeEnabled();
  await page.getByText("Send").click();
  await approveTx({ page });
  await page.locator("[data-testid='ms-transaction-0'] button").click();
  await page.getByTestId("ms-tx-approve").click();
  await page.getByTestId("ms-tx-approve-confirm").click();
  await approveTx({ page });
  
});

async function connectToTenderly({ page }: PageParams) {
  await page.goto("http://localhost:3000/");
  await page.getByTestId("rk-connect-button").click();
  await page.getByTestId("rk-wallet-option-metaMask").click();
  await metamask.acceptAccess();
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
  await page.getByTestId("ms-input-signatures-required").fill("3");
  await page.getByTestId("ms-multisig-review").click();
  await page.getByTestId("ms-multisig-create").click();
  await approveTx({ page });
}
