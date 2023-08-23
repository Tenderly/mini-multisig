import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByTestId("rk-connect-button").click();
  await page.getByTestId("rk-wallet-option-metaMask").click();
  await metamask.acceptAccess();
  await expect(page.getByTestId("rk-account-button")).toContainText(
    "0xE5...8ce1"
  );
});
