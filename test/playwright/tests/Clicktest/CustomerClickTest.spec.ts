import {test, expect} from '@playwright/test';


const baseUrl = 'https://passionweb-typo3-codebreak.ddev.site/';

test('<Customer> Screen Comparison', async ({page}) => {
    // max time, how long the test can run. Depends on the amount of URLs and pagespeed.
    test.setTimeout(20000);
    try {
        await page.goto('https://passionweb-typo3-codebreak.ddev.site/');

        await page.getByRole('link', { name: 'Some link' }).click();

        await page.getByRole('textbox', { name: 'Full name *' }).click();
        await page.getByRole('textbox', { name: 'Full name *' }).fill('John Doe');
        await page.getByRole('textbox', { name: 'Subject *' }).click();
        await page.getByRole('textbox', { name: 'Subject *' }).fill('Contact Request');
        await page.getByRole('textbox', { name: 'Email *' }).click();
        await page.getByRole('textbox', { name: 'Email *' }).fill('JohnDoe@somemail.com');
        await page.getByRole('textbox', { name: 'Message *' }).click();
        await page.getByRole('textbox', { name: 'Message *' }).fill('Hello, I am John Doe!');
        await page.getByRole('button', { name: 'Submit' }).click();

        await page.getByText('Contact Request sent').click();
        await page.getByText('Thank you for your inquiry!').click();
    } catch (error) {
        console.log(error.message);
    }
});
