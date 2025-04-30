import { test, expect } from '@playwright/test';

test('Join table button works inside iframe', async ({ page }) => {
  await page.goto('https://demo.live88.io/operator/live88demo/live88-lobby/fun');

  const iframeLocator = page.locator('iframe#iframeId');
  await expect(iframeLocator).toBeVisible({ timeout: 10000 });

  const frameHandle = await iframeLocator.elementHandle();
  const frame = await frameHandle.contentFrame();

  const joinButtons = frame.locator('[data-test-id="button-click-join-table-button"]');
  await expect(joinButtons.first()).toBeVisible({ timeout: 10000 });

  await joinButtons.first().click();

  const body = await frame.$('body');
  expect(body).not.toBeNull();
});
