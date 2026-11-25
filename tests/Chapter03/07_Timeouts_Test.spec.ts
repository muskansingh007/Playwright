import { test, expect, defineConfig } from "@playwright/test";

test("Timeout in Playwright", async ({ page }) => {
test.setTimeout(1 * 60 * 1000); // Set the Individual test timeout to 1 minute (60 seconds) It will override the global timeout for this test only and in this case, the test will fail after 60 seconds if it is not completed.Also set the Global timeout for the test to 120 seconds in the playwright.config.ts file.
// Go to URL
  await page.goto("https://duckduckgo.com/");

  // Search with keywords
  await page
    .getByLabel("Search with DuckDuckGo", { exact: true })
    .fill("playwright by testers talk");

  await page
    .getByLabel("Search with DuckDuckGo", { exact: true })
    .press("Enter");

  // Click on playlist
  await page
    .getByRole("link", {
      name: "Playwright by Testers Talk",
    })
    .first()
    .click({timeout: 5000}); // Action Timeout is set to 50 seconds in the playwright.config.ts file, so this will fail the test after 10 seconds if the action is not completed.


  // Validate web page title
//   await expect(page).toHaveTitle("Playwright by Testers Talk ✅ - YouTube");

//   await page.waitForTimeout(60000); // Global timeout for the test is 60 seconds, so this will fail the test after 60 seconds
    // Assertion timeout is set to 10 seconds in the playwright.config.ts file, so this will fail the test after 10 seconds if the title is not found. You can also set the timeout for this assertion to 5 seconds by passing the timeout option to the expect function.
    await expect(page).toHaveTitle("Playwright Wrong by Testers Talk ✅ - YouTube", { timeout: 5000 }); 
    // Global Assertion timeout for the test is 10 seconds, so this will fail the test after 5 seconds
    // for the assertion add in use block in the playwright.config.ts file.
    // for the all test execution timeout add global timeout in the defineConfig section playwright.config.ts file in the timeout property.

});
