
import { test, expect } from '@playwright/test';

// Write a test case to demonstrate locators in Playwright
test('Locators in Playwright', async ({ page }) => {
    // Navigate to the Github homepage
//   await page.goto('https://github.com/muskansingh007');
// getByRole() method is used to locate the element by its role attribute. In this case, we are locating the "Sign in" button by its role and name.
    // await page.getByRole('link', { name: 'Sign in' }).click();

// getByLabel() method is used to locate the element by its label text. In this case, we are locating the "Username or email address" input field by its label.
    // await page.getByLabel('Homepage', {exact:true}).first().click();


// getbyAltText() method is used to locate image elements by their alt text. In this case, we are locating the "GitHub" logo image by its alt text.
    // await page.getByAltText("View muskansingh007's full-sized avatar").click();
 
// data-tab-item="packages" find common attributes of the element and locate it using the getByTestId() method. In this case, we are locating the "Packages" tab by its data-tab-item attribute.
    // await page.getByTestId('packages').first().click();

//getbytext() method is used to locate elements by their visible text content. In this case, we are locating the "Sign in" link by its text.
    // await page.getByText('Sign up').click();

// getbyplaceholder() method is used to locate input fields by their placeholder text. In this case, we are locating the "Search GitHub" input field by its placeholder text.

    // GetByPlaceholder, Xpath, CSSSelectors
    // await page.goto('https://www.youtube.com/@testerstalk');
    // await page.getByPlaceholder('Search').fill('testers talk');

    // Xpath is a way to locate elements in the DOM using their hierarchical structure. In this case, we are locating the "Search" input field using its XPath expression.
    // await page.locator('//input[@id="search"]').first().fill('playwright typescript by testers talk');

    // await page.locator('input[name="search_query"]').first().fill('playwright typescript by testers talk');

    // CSS Selectors is a way to locate elements in the DOM using their CSS properties. In this case, we are locating the "Search" input field using its CSS selector.
    // await page.locator('input#search').first().fill('playwright typescript by testers talk');
    // // GetByTitle
    // await page.goto('https://www.google.com/');
    // await page.getByTitle('Search').fill('playwright javascript by testers talk');

    // getbytitle() method is used to locate elements by their title attribute. In this case, we are locating the "Search" input field by its title attribute.
    await page.goto('https://google.com/');
    await page.getByTitle('Search').fill('playwright by testers talk');


});
