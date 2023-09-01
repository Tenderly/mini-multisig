import * as metamask from "@synthetixio/synpress/commands/metamask";
import * as playwright from "@synthetixio/synpress/commands/playwright";
import { advancedPageElements, settingsPageElements } from "@synthetixio/synpress/pages/metamask/settings-page";
// import {} from  "@synthetixio/synpress/pages/metamask/settings-page";

export const deactivateCustomNonce = async (experimental: boolean) => {
    await metamask.switchToMetamaskIfNotActive();
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

export const approveTx = async({page}: {page: any}) => {
    const notificationPage = await playwright.switchToMetamaskNotification()
    return await playwright.waitAndClick(
        '.page-container__footer .btn-primary:not([disabled])',
        notificationPage
      );
}
