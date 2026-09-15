import { test, expect } from '@playwright/test';

const LOBBY_URL = 'https://demo.live88.io/operator/live88demo/live88-lobby/fun';

test('user can join a table from the lobby', async ({ page }) => {
  await page.goto(LOBBY_URL);

  const iframe = page.locator('iframe#iframeId');
  await expect(iframe).toBeVisible({ timeout: 10_000 });

  const lobby = page.frameLocator('iframe#iframeId');
  const joinButton = lobby
    .locator('[data-test-id="button-click-join-table-button"]')
    .first();

  await expect(joinButton).toBeVisible({ timeout: 10_000 });
  await joinButton.click();

  await expect(lobby.locator('body')).toBeVisible();
});
