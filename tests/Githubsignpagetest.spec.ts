import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigate to GitHub", async () => {
    await page.goto("https://github.com/");
    await page.getByRole("link", { name: "Sign in" }).click();
  });

  await test.step("Enter Username or Password", async () => {
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .click();
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("muskan");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("muskan");
  });

  await test.step("Click On SignIn", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("Validate Error Message", async () => {
    await expect(page.getByRole("alert")).toContainText(
      "Incorrect username or password.",
    );
  });
});
