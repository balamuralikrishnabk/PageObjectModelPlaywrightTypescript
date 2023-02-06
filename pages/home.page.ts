
import {expect, FrameLocator, Locator, Page } from '@playwright/test';
import { BasePage} from '../pages/base.page';

export class HomePage extends BasePage{
    readonly frame1: string;
    readonly agreeBtn: string;
    readonly dealsTab: string;
    
    constructor(page:Page){
        super(page);
    
   //locator
    this.frame1 = "#sp_message_iframe_474555";
    this.agreeBtn = "text=Agree";
    //this.dealsTab = page.locator('[data-test-id="primary-nav-list"] >> text="Deals"');
    this.dealsTab = '[data-test-id="primary-nav-list"] >> text="Deals"';

    }

    async navigate(){
        await super.navigate('https://sky.com');
    }

    async supressalert(){
        
        await this.page.frameLocator(this.frame1).locator(this.agreeBtn).click();
        //const frame11 = await this.frame1
        //await frame11.locator("text=Agree").click();
    }
    async clicktab(){
        await this.page.click(this.dealsTab);
    }

    async geturl(){
        
        //await expect(this.page).toHaveURL('https://www.sky.com/deals');
        expect(this.page.url()).toEqual('https://www.sky.com/deals');
    }
}
