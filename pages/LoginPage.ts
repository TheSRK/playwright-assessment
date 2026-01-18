import { Locator, Page } from '@playwright/test'

export class LoginPage{
    readonly page:Page;
    readonly fldUserName:Locator;
    readonly fldPassword:Locator;
    readonly btnLogin:Locator

    constructor(page:Page){
        this.page = page;

        // elements
        this.fldUserName = page.getByPlaceholder('Username');
        this.fldPassword = page.getByPlaceholder('Password');
        this.btnLogin = page.getByText(' Login ')
    }

    // methods

    async goToHomePage() {
        this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async doLogin(userName:string, password:string){
        await this.fldUserName.fill(userName);
        await this.fldPassword.fill(password);
        await this.btnLogin.click;

    }
}