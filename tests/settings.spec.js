import { test, expect } from '@playwright/test';

test('Opening settings and verifying settings items', async ({ page }) => {
  await page.goto('https://demo.live88.io/operator/live88demo/live88-lobby/fun');

  const iframeLocator = page.locator('iframe#iframeId');
  await expect(iframeLocator).toBeVisible({ timeout: 10000 });

  const frameHandle = await iframeLocator.elementHandle();
  const frame = await frameHandle.contentFrame();

  const menuButton = frame.locator('[data-test-id="button-click-open-menu-modal"]');
  await expect(menuButton).toBeVisible({ timeout: 10000 });
  await menuButton.click();

  const settingsItem = frame.locator('li[data-test-id="menu-link-settings"]');
  await expect(settingsItem).toBeVisible({ timeout: 5000 });
  await settingsItem.click();

  await expect(frame.getByText('Nickname')).toBeVisible();
  await expect(frame.getByText('Master volume')).toBeVisible();
  await expect(frame.getByText('Dealer voice')).toBeVisible();
  await expect(frame.getByText('Client sounds')).toBeVisible();
  await expect(frame.getByText('Language')).toBeVisible();
});
