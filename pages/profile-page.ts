import { Page } from "@playwright/test";
import HomePage from "./home-page";
import { locators } from "./web-element/profile-page-section";

export default class ProfilePage extends HomePage{

    constructor(public page:Page){
        super(page);
    }

    async getLoggedinUser(): Promise<string | null> {
         return await this.page.locator(locators.userName).textContent();
    }

    async goToBookStore(): Promise<void>{
         await this.page.locator(locators.gotoBookStore).click();
    }

    async booksCount(): Promise<number | null>{
        let books = this.page.locator(locators.booksCount);
        return books.count();
    }

}