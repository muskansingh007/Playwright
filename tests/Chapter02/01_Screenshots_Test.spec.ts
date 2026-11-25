// Import playwright module

import { test, expect } from '@playwright/test';

// Write a test case to capture screenshots in Playwright
test('Capture screenshots in Playwright', async ({ page }) => {
    // Navigate to the Google homepage
  await page.goto('https://www.youtube.com/@testerstalk');


// Capture a screenshot of a specific element on the page
// I have kept the screenshoot name as ElementsScreenshot.png and it will be saved in the Screenshots folder
await page.locator('#page-header-container').screenshot({ path: './Screenshots/ElementsScreenshot.png' });

// Page screenshot
await page.screenshot({ path: './Screenshots/PageScreenshot.png' });

// Full Page screenshot
await page.screenshot({ path: './Screenshots/FullPageScreenshot.png', fullPage: true });
});

