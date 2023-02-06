 
import { test, expect } from '@playwright/test'

test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    test('Show the results determined by editorial, as well as generic searches.', async({page}) => {
        await page.goto('https://www.sky.com', {waitUntil: "domcontentloaded"});
        await page.frameLocator("#sp_message_iframe_474555").locator("text=Agree").click();
        await page.waitForTimeout(10000);  
        //await page.mainFrame();  
       await page.locator("//button[@id='masthead-search-toggle']").click();
       const searchboxes = await page.$$("//input[@type='search']");
       await searchboxes[0].fill("Sky");
        //await page.frameLocator("//iframe[@title='iFrame containing Sky Sign-In application']").locator("//*[@id='username']").fill("chandra34253@gmail.com");
        //await page.frameLocator("//iframe[@title='iFrame containing Sky Sign-In application']").locator("//button[text()='Continue']").click();
        await page.waitForTimeout(10000); 
        await page.screenshot({path: 'searchresultfullpage.png'});
        const searchcontainer = await page.$("//*[@class='search-container svelte-18a6yi5']");
        await searchcontainer?.screenshot({path: 'searchcontainer.png'});
        //console.log (await page.frameLocator("//iframe[@title='iFrame containing Sky Sign-In application']").locator("//h1").innerText());
    });
});