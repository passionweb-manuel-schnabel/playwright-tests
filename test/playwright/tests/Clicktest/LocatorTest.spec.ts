import {expect, test} from "@playwright/test";

test('Locator Test', async ({page}) => {
    // max time, how long the test can run. Depends on the amount of URLs and pagespeed.
    test.setTimeout(20000);
    try {
        await page.goto('https://passionweb-typo3-codebreak.ddev.site/');

        await expect(page.frameLocator(".gallery-item")).toBeTruthy();
        await page.getByLabel('Password').fill("Some Random password");
        await expect(page.getByText("Fill out this form")).toBeVisible();
        await expect(page.getByPlaceholder("mymail@somemail.com")).toBeVisible();
        await expect(page.getByAltText("Passionweb Logo")).toBeVisible();
        await expect(page.getByTestId("CustomContentId")).toBeVisible();
        const locator = page.getByRole('button', {name: "Submit"});
        await locator.hover();
        await locator.click()
    }
    catch(error){
        console.log(error.message());
    }
});
