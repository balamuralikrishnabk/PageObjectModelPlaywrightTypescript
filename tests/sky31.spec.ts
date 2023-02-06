import { test, expect } from '@playwright/test'

test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    test('User is prompted to create my Sky password when signing in with invalid credentials', async({page}) => {
        await page.goto('https://www.sky.com', {waitUntil: "domcontentloaded"});
        await page.frameLocator("#sp_message_iframe_474555").locator("text=Agree").click();
        await page.locator('[data-test-id="sign-in-link"]').click();
        await page.waitForTimeout(10000);  
        //await page.mainFrame();  
       
        await page.frameLocator("//iframe[@title='iFrame containing Sky Sign-In application']").locator("//*[@id='username']").fill("chandra34253@gmail.com");
        await page.frameLocator("//iframe[@title='iFrame containing Sky Sign-In application']").locator("//button[text()='Continue']").click();
        await page.waitForTimeout(10000); 
        console.log (await page.frameLocator("//iframe[@title='iFrame containing Sky Sign-In application']").locator("//h1").innerText());
    });
});