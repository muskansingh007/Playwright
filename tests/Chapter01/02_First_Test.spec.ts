
import { test, expect } from '@playwright/test';

test('My First Playwright TypeScript Test', async ({ page }) => {

    // Go to URL
    await page.goto('https://duckduckgo.com/');

    // Search with keywords
    await page.getByLabel('Search with DuckDuckGo', { exact: true })
        .fill('playwright by testers talk');

    await page.getByLabel('Search with DuckDuckGo', { exact: true })
        .press('Enter');

    // Click on playlist
    await page.getByRole('link', {
        name: 'Playwright by Testers Talk'
    }).first().click();

    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

});
