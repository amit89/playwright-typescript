import {expect, test, beforeEach} from "../fixtures/base-test";
import data from "../test-data/sample-data.json"


test.beforeEach(async({page, baseURL})=>{
    await page.goto(`${baseURL}login`);
});


test("sample test", async({page, loginPage})=>{
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginButton();
    await expect(page.locator("#userName-value")).toHaveText(data.userName);
})