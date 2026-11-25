
import { test, expect } from '@playwright/test';

test('Multiple Browser/Tabs in Playwright', async ({ page, browser}) => {

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


    // Create new browser context and page
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://duckduckgo.com/');

    // Search with keywords
    await page2.getByLabel('Search with DuckDuckGo', { exact: true })
        .fill('playwright by testers talk');

    await page2.getByLabel('Search with DuckDuckGo', { exact: true })
        .press('Enter');

    // Click on playlist
    await page2.getByRole('link', {
        name: 'Playwright by Testers Talk'
    }).first().click();

    // Validate web page title
    await expect(page2).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

    // Create new tab in the new browser context

    const newTab = await context2.newPage();
    await page2.goto('https://duckduckgo.com/');

    // Search with keywords
    await page2.getByLabel('Search with DuckDuckGo', { exact: true })
        .fill('playwright by testers talk');

    await page2.getByLabel('Search with DuckDuckGo', { exact: true })
        .press('Enter');
});
