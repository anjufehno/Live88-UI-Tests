import { test, expect } from '@playwright/test';

const LOBBY_URL = 'https://demo.live88.io/operator/live88demo/live88-lobby/fun';

test('user can open settings and see core controls', async ({ page }) => {
  await page.goto(LOBBY_URL);

  const iframe = page.locator('iframe#iframeId');
  await expect(iframe).toBeVisible({ timeout: 10_000 });

  const lobby = page.frameLocator('iframe#iframeId');
  const menuButton = lobby.locator(
    '[data-test-id="button-click-open-menu-modal"]',
  );

  await expect(menuButton).toBeVisible({ timeout: 10_000 });
  await menuButton.click();

  const settingsItem = lobby.locator(
    'li[data-test-id="menu-link-settings"]',
  );

  await expect(settingsItem).toBeVisible({ timeout: 5_000 });
  await settingsItem.click();

  const expectedSettings = [
    'Nickname',
    'Master volume',
    'Dealer voice',
    'Client sounds',
    'Language',
  ];

  for (const label of expectedSettings) {
    await expect(lobby.getByText(label, { exact: true })).toBeVisible();
  }
});
