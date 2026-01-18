import {test as baseTest, Page} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

type pages = {
    loginPage: LoginPage
    page:Page
}

export const test = baseTest.extend<pages>({
    loginPage: async ({page}, use) =>{
        await use(new LoginPage(page))
    }
})

export const expect = test.expect