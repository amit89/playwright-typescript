import{test, expect, beforeEach, describe} from "../fixtures/base-test";

test.beforeEach(async({page, baseURL})=>{
    await page.goto(`${baseURL}`);
    await page.waitForLoadState("networkidle");
})

test.describe("Profile Page Test cases", ()=>{

    test("Validate ", async({page})=>{

    })

})