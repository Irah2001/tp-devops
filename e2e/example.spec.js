// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('should display correct title text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = page.locator('#title');
  await expect(title).toHaveText('Hello Playwright');
});
