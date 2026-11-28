import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string,
    },
    TestDataSet2: {
        Skill1: string,
        Skill2: string,
    },
}
const typedTestData = testData as TestData;

const escapeForRegExp = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

for (const dataSetName of Object.keys(typedTestData) as (keyof TestData)[]) {
    const skill = typedTestData[dataSetName];

    test(`Data Driven Testing Using JSON file in playwright : ${skill.Skill2}`, { tag: ['@DataDrivenTesting'] }, async ({ page }) => {

        // Go to URL
        await page.goto('https://duckduckgo.com/');

        // Search with keywords
        const searchBox = page.getByLabel('Search with DuckDuckGo', { exact: true });
        await searchBox.fill(skill.Skill2);
        await searchBox.press('Enter');

        // Click on result and wait for YouTube navigation
        const result = page.getByRole('link', { name: skill.Skill2}).first();
        await Promise.all([
            page.waitForURL(/youtube\.com/, { timeout: 30000 }),
            result.click(),
        ]);

        // YouTube may vary its title suffix, so validate the stable search term and suffix
        await expect(page).toHaveTitle(
            new RegExp(`^${escapeForRegExp(skill.Skill2)}.* - YouTube$`)
        );
    });
}
