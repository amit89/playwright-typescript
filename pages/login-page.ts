import { Page } from "@playwright/test";
import HomePage from "./home-page";
import { locators } from "./web-element/login-page-section";

export default class LoginPage extends HomePage{

    constructor(public page: Page){
        super(page)
    }

    async enterUserName(userName: string): Promise<void> {
       await this.page.locator(locators.USERNAME_FIELD)
            .type(userName);
    }

    async enterPassword(password: string): Promise<void>{

        await this.page.locator(locators.PASSWORD_FIELD)
            .type(password);
    }

    async clickLoginButton(): Promise<void> {
        await Promise.all([
            this.page.waitForURL(/.*profile/),
            await this.page.locator(locators.LOGIN_BUTTON).click()
        ]);
    }
}