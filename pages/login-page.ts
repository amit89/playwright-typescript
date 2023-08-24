import { Page } from "@playwright/test";
import HomePage from "./home-page";
import { locators } from "./web-element/login-page-section";

export default class LoginPage extends HomePage{

    constructor(public page: Page){
        super(page)
    }

    async enterUserName(userName: string): Promise<void> {
       await this.page.locator(locators.USERNAME_FIELD)
            .fill(userName);
    }

    async enterPassword(password: string): Promise<void>{

        await this.page.locator(locators.PASSWORD_FIELD)
            .fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await Promise.all([
            await this.page.locator(locators.LOGIN_BUTTON).click()
        ]);
    }

    async getInvalidLoginMessage(): Promise<string | null> {
        return await this.page.locator(locators.INVALID_LOGIN_MESSAGE).textContent();
    }
}