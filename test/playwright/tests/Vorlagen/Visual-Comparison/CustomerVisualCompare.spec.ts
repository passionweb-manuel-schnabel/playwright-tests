import { test, expect } from '@playwright/test';
import { urls }  from "./Urls";


const baseUrl = 'https://autodudes-blog.ddev.site/';

test('<Customer> Screen Comparison', async ({ page }) => {

    if (baseUrl === 'https://staging.example.com/') {
        // login to htaccess
        await page.goto('https://user:password@staging.example.com/');
    }
    // max time, how long the test can run. Depends on the amount of URLs and pagespeed.
    test.setTimeout(10000000);
    for (const url of urls) {
        try {
            await page.goto(baseUrl + url, { waitUntil: 'domcontentloaded' });
            // wait for loading
            await page.waitForTimeout(500);
            await expect(page).toHaveScreenshot({ maxDiffPixels: 100, fullPage: true, timeout: 15000 });
        } catch (error) {
            console.log(error.message);
        }
    }
});
