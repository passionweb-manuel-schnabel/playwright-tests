import { test, expect } from '@playwright/test';
import { urls }  from "./Urls";


const baseUrl = 'https://passionweb-typo3-codebreak.ddev.site/';

test('<Customer> Screen Comparison', async ({ page }) => {
    // max time, how long the test can run. Depends on the amount of URLs and pagespeed.
    test.setTimeout(10000);
    for (const url of urls) {
        try {
            await page.goto(baseUrl + url, { waitUntil: 'domcontentloaded' });
            // wait for loading
            await page.waitForTimeout(500);
            await expect(page).toHaveScreenshot({ maxDiffPixels: 100, fullPage: true, timeout: 2000 });
        } catch (error) {
            console.log(error.message);
        }
    }
});
