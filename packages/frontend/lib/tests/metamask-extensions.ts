import * as metamask from "@synthetixio/synpress/commands/metamask";
import * as playwright from "@synthetixio/synpress/commands/playwright";
import {
  advancedPageElements,
  settingsPageElements,
} from "@synthetixio/synpress/pages/metamask/settings-page";
import { Page } from "@playwright/test";

export const deactivateCustomNonce = async (experimental: boolean) => {
  await metamask.goToAdvancedSettings();
  if (
    (await playwright
      .metamaskWindow()
      .locator(advancedPageElements.customNonceToggleOff)
      .count()) === 0
  ) {
    await playwright.waitAndClick(advancedPageElements.customNonceToggleOn);
  }

  await playwright.waitAndClick(
    settingsPageElements.closeButton,
    await playwright.metamaskWindow(),
    {
      waitForEvent: "navi",
    },
  );
  await metamask.closePopupAndTooltips();
  await metamask.switchToCypressIfNotActive();
};

export const approveTx = async ({ page }: { page: Page }) => {
  const notificationPage = await playwright.switchToMetamaskNotification();
  return await playwright.waitAndClick(
    ".page-container__footer .btn-primary:not([disabled])",
    notificationPage,
  );
};

// don't worry, fake accounts

// 0xC305f4b9925b9eC6b3D0FCC42B7b22F1245A5011
const MM_ACCOUNT_1_PK =
  "fa5568408b1f994003a17d4c91a7b2a71d7ea1175e035753167226c62e0f4db5";

// 0xdb623c0f74d4ed5af4b254327147c4ac7e5d3fac
const MM_ACCOUNT_2_PK =
  "ba006e33f250b15f5e276081b16c87c0769d08ec528ac50e0467cd83cd4ae1a6";

// 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
const MM_ACCOUNT_3_PK =
  "cca4ab4bc23486b65b0f5794e3fbb9ea401e9867d801e2c254fe2cd5e89a9f85";

export const importAccounts = async () => {
  await metamask.importAccount(MM_ACCOUNT_1_PK);
  await metamask.importAccount(MM_ACCOUNT_2_PK);
  await metamask.importAccount(MM_ACCOUNT_3_PK);
};
