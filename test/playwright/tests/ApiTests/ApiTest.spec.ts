import {test, expect} from '@playwright/test';

test('OpenAI API status check', async ({ request }) => {
    const status = await request.get(`https://status.openai.com/api/v2/summary.json`);
    expect(status.ok()).toBeTruthy();
    const json = await status.json();
    console.log(json.components);
    expect(json.components).toContainEqual(
        expect.objectContaining({
            'name': 'Assistants',
            'status': 'operational'
        })
    );
});

test('OpenAI API simple request', async ({request}) => {
    const apiCall = await request.post('https://api.openai.com/v1/responses', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY,
        },
        form: {
            "model": "gpt-4o",
            "input": "Give me 5 tips to get better at TYPO3",
        }
    });

    expect(apiCall.ok()).toBeTruthy();
    const json = await apiCall.json();

    const output = json.content.text;
    expect(output).toBeTruthy();
    expect(output.type).toEqual(expect.any(String));
    console.log(output);
});
