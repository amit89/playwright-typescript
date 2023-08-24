import {test as baseTest} from "@playwright/test";
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import RegistrationPage from "../pages/registeration-page";
import ProfilePage from "../pages/profile-page";


type pages={
    loginPage: LoginPage,
    homePage: HomePage,
    registerPage: RegistrationPage
    profilePage: ProfilePage
}

const testPage = baseTest.extend<pages>({

    homePage: async({page}, use)=>{
        const homePage = new HomePage(page)
        await use(homePage);
    },

    loginPage:async({page}, use)=>{
        await use(new LoginPage(page))
    },

    registerPage: async({page}, use)=>{
        await use(new RegistrationPage(page))
    },

    profilePage: async({page}, use) =>{
        await use(new ProfilePage(page))
    }
});

export const test = testPage;
export const expect = testPage.expect;
export const describe = testPage.describe;
export const beforeEach = testPage.beforeEach;
export const beforeAll = testPage.beforeAll;