import {expect, test, beforeEach} from "../fixtures/base-test";
import data from "../test-data/sample-data.json"


beforeEach(async({page, baseURL})=>{
    await page.goto(`${baseURL}login`);
});


test("Test_01: Verify only valid user should able to login", async({loginPage, profilePage})=>{
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginButton();
    await expect(await profilePage.getLoggedinUser()).toContain(data.userName);
})

test("Test_02: Verify that with invlaid credentails user should get proper error message", async({loginPage})=>{
    await loginPage.enterUserName(data.invalidUserName);
    await loginPage.enterPassword(data.invalidPassword);
    await loginPage.clickLoginButton();
    await expect(await loginPage.getInvalidLoginMessage()).toContain(data.invalidUser);
})

test("Test_03: Validate bookstore should have atleast 10 books", async({loginPage, profilePage})=>{
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginButton();
    await profilePage.goToBookStore();
    await expect(await profilePage.booksCount()).toBeGreaterThanOrEqual(10);

})