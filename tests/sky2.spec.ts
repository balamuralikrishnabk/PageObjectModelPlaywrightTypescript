import { test, expect } from '@playwright/test'

test.describe("This feature will make sure that the shop page is navigable and usable", () => {
    test('User sees deals on the mobile shop page', async({page}) => {
        await page.goto('https://www.sky.com/shop/mobile/deals', {waitUntil: "domcontentloaded"});
        await page.frameLocator("#sp_message_iframe_474555").locator("text=Agree").click();
        const mobiledealslist = await page.$$('//*[@class="c-product-grid__item"]');
        const output =  await mobiledealslist.length;
         expect(output).not.toBeLessThan(3);
        
       
        for (let i=0; i<3; i++){
           //console.log('list'+i, await mobiledealslist[i].innerText());
           const images = await mobiledealslist[i].$('img');
           await images?.screenshot({path : 'image'+i+'.png'});
           const phonetitle = await mobiledealslist[i].$('//span[@data-test-id="selection-heading-text"]');
           const phoneprice = await mobiledealslist[i].$('//*[@class="c-linear-costing__main"]');
           console.log('list'+i, await phoneprice?.innerText());
           console.log('list'+i, await phonetitle?.innerText());
           expect.soft(await phonetitle?.innerText()).not.toBeNull();
        }
        expect(test.info().errors).toHaveLength(0);
        //console.log("1",output);
       // console.log("2",await mobiledealslist[1].innerText());
        //const availablemobiledeals = await mobiledealslist.locator('["c-product-grid__item"]');
        //console.log("availablemobiledeals", await availablemobiledeals.length);
       // for (let i=0; i<availablemobiledeals.length; i++){
       //     console.log(await availablemobiledeals[i].innerText());
        //}
      
        // await page.frameLocator("#sp_message_iframe_474555").locator("text=Agree").click();
       //  await page.locator('[data-test-id="primary-nav-list"] >> text="Deals"')
        // await expect(page.url()).toEqual('https://www.sky.com/deals', 'deal url does match');
        
    })
})


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.sky.com/shop/mobile/deals');
//   await page.frameLocator('iframe[title="SP Consent Message"]').getByRole('button', { name: 'Agree' }).click();
//   await page.locator('[data-test-id="mobile-product-selection-SAMSUNG_TABS85G_GRAPHITE_WITH_100MB_TARIFF"] [data-test-id="toolkit-card"]').click({
//     button: 'middle'
//   });
//   await page.goto('https://www.sky.com/shop/mobile/deals');
//   await page.locator('[data-test-id="phones-tab-button"]').click();
//   await page.locator('[data-test-id="deals-tab-button"]').click();
//   await page.locator('[data-test-id="mobile-product-selection-SAMSUNG_TABS85G_GRAPHITE_WITH_100MB_TARIFF"] [data-test-id="toolkit-card"]').click();
// });