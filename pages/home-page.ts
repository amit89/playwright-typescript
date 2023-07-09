import { Page } from "@playwright/test";
import { locators } from "./web-element/home-page-section";


export default class HomePage {


    constructor(public page: Page) {
        this.page = page
    }

    async navigateToBookStoreApppage(): Promise<void> {
        await Promise.all([
            this.page.waitForURL(/.*books/),
            await this.page.locator(locators.BOOK_STORE_APPLICATION_LINK).click()
        ]);
    }

    async navigateToElementsPage(): Promise<void> {
        await Promise.all([
            this.page.waitForURL(/.*elements/),
            await this.page.locator(locators.ELEMENTS_LINK).click()
                ]);
    }

    async navigateToFormsPage(): Promise<void> {
        await Promise.all([
            this.page.waitForURL(/.*forms/),
            await this.page.locator(locators.FORMS_LINK).click()
        ]);
    }

    async navigateToAlertPage(): Promise<void> {
        await Promise.all([
            this.page.waitForURL(/.*alertsWindows/),
            await this.page.locator(locators.FORMS_LINK).click()
        ]);
    }

    async navigateToWidgetsPage(): Promise<void> {
        await Promise.all([
            this.page.waitForURL(/.*widgets/),
            await this.page.locator(locators.FORMS_LINK).click()
        ]);
    }

    async navigateToInteractionsPage(): Promise<void> {
        await Promise.all([
            this.page.waitForURL(/.*interaction/),
            await this.page.locator(locators.FORMS_LINK).click()
        ]);
    }

}