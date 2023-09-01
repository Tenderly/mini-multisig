import { approveTx, deactivateCustomNonce } from "../metamask-extensions";
import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

const connectToTenderly = async ({page}: {page: any})=>{

}

test('Test Creating a Wallet', async ({ page }) => {
  await deactivateCustomNonce(false);

  await page.goto("http://localhost:3000/");
  await page.getByTestId("rk-connect-button").click();
  await page.getByTestId("rk-wallet-option-metaMask").click();
  await metamask.acceptAccess();
  // take the chain
  await page.getByTestId("rk-chain-button").click();
  await page.getByTestId("rk-chain-option-736031").click();
  await metamask.allowToAddAndSwitchNetwork()
  
  await page.getByTestId("ms-create-multisig").click();
  await page.getByLabel("Name").fill("My Crew");
  await page.getByLabel("Owners").fill("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\n0x70997970C51812dc3A010C7d01b50e0d17dc79C8\n0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");
  await page.getByTestId("ms-input-signatures-required").fill("3");
  await page.getByTestId("ms-multisig-review").click();
  await page.getByTestId("ms-multisig-create").click();
  await approveTx({page});
  // (await page.waitForSelector(".page-container__footer .btn-primary:not([disabled])")).click();
  // NONCE FUCKUP
  await page.getByTestId("ms-multisig-btn-My Crew").click();
  await page.getByTestId("ms-propose-tx-btn").click();
});