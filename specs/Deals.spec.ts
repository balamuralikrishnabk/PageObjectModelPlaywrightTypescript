import {test, expect, chromium, Browser, BrowserContext, Page} from '@playwright/test';
import { HomePage} from '../pages/home.page';


test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    let browser: Browser;
    let context: BrowserContext; 
    let page: Page;
    let homepage : HomePage;
    
    test.beforeAll(async () =>{
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        homepage = new HomePage(page);
    });

    test.afterAll(async () =>{
        await browser.close();
        await context.close();
    });

    test('Launch sky page', async() => {
        await homepage.navigate(); 
        await homepage.supressalert();
 
        await homepage.clicktab();
        await homepage.geturl(); 
        
    });
});

