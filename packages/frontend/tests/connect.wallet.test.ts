import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByTestId("rk-connect-button").click();
  await page.getByTestId("rk-wallet-option-metaMask").click();
  await metamask.acceptAccess();
  await expect(page.getByTestId("address")).toContainText(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  );
});
