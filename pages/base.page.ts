import { expect, Locator, Page } from '@playwright/test';
export class BasePage{
    readonly page: Page;
    readonly url: string;

    constructor(page:Page){
        this.page = page;

    }

    async navigate(url:string){
        await this.page.goto(url,{waitUntil: "domcontentloaded"});
    }
}
