import {test, expect} from '../fixures/page.fixures'

test('login test', async({loginPage, page})=>{
    // create instance
   // const loginPage = new LoginPage(page);

    //action
    await loginPage.goToHomePage();
    await expect(page).toHaveTitle('OrangeHRM')
    await loginPage.doLogin('Admin','admin123');

})