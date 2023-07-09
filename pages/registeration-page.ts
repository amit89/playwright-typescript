import { Page } from "@playwright/test";
import HomePage from "./home-page";

export default class RegistrationPage extends HomePage{

    constructor(public page:Page){
        super(page);
    }

}