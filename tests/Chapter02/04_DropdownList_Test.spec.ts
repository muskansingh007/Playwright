// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Handling Dropdown list in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.facebook.com/');
    await page.getByRole('link',{name : 'Create new account'}).click();

    // // Select dropdown using value
    // await page.getByRole('combobox', { name: 'Select month' }).click();
    // await page.getByRole('option', { name: 'March', exact: true }).click();
    // // Select dropdown using visible text
    // await page.getByLabel('Month').selectOption('Oct');

    // // Validate all the options
    // await expect(page.locator('[role="listbox"][role="option"]')).toHaveText(['January', 'February', 'March','April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December']);
    await page.getByRole('combobox', { name: 'Select month' }).click();
    await expect(page.getByRole('option')).toHaveText([
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ]);
});
