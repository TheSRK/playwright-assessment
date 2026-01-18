import { test as base, expect, Page, Locator, Response } from '@playwright/test'
import { HomePage } from '../pages/demoblaze/HomePage'
import { ProductDetailPage } from '../pages/demoblaze/ProductDetailPage'
import { CartPage } from '../pages/demoblaze/CartPage'
import { CheckoutModal } from '../pages/demoblaze/CheckoutModal'

export type PageObjects = {
    homePage: HomePage
    productDetailPage: ProductDetailPage
    cartPage: CartPage
    checkoutModal: CheckoutModal
}

export const test = base.extend<PageObjects>({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },
    productDetailPage: async ({page}, use) => {
        const productDetailPage = new ProductDetailPage(page)
        await use(productDetailPage)
    },
    cartPage: async ({page}, use) => {
        const cartPage = new CartPage(page)
        await use(cartPage)
    },
    checkoutModal: async ({page}, use) => {
        const checkoutModal = new CheckoutModal(page)
        await use(checkoutModal)
    }
})

export { expect, Page, Locator, Response }