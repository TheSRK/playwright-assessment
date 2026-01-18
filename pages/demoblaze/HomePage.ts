import { Locator, Page, expect } from '@playwright/test'
import { config } from '../../config'
import testData from '../../testdata/testData.json'

export class HomePage {
    readonly page: Page
    
    // Navigation
    readonly navHome: Locator
    readonly navCart: Locator
    
    // Categories
    readonly categoryPhones: Locator
    readonly categoryLaptops: Locator
    readonly categoryMonitors: Locator
    
    // Product Catalog
    readonly productCards: Locator
    readonly productTitles: Locator

    constructor(page: Page) {
        this.page = page
        
        // Navigation
        this.navHome = page.getByRole('link', { name: 'PRODUCT STORE' })
        this.navCart = page.getByRole('link', { name: 'Cart', exact: true })
        
        // Categories
        this.categoryPhones = page.getByRole('link', { name: 'Phones' })
        this.categoryLaptops = page.getByRole('link', { name: 'Laptops' })
        this.categoryMonitors = page.getByRole('link', { name: 'Monitors' })
        
        // Product Catalog
        this.productCards = page.locator('.card-block')
        this.productTitles = page.locator('.card-title a')
    }

    // Navigation Methods
    
    async goToHomePage() {
        await this.page.goto(config.demoblazeUrl)
    }

    async verifyPageLoaded() {
        await expect(this.page).toHaveTitle(testData.demoblaze.pageTitle)
        await expect(this.productCards.first()).toBeVisible()
    }

    async navigateToCart() {
        await this.navCart.click()
    }

    // Category Methods
    
    async selectCategory(category: 'Phones' | 'Laptops' | 'Monitors') {
        switch (category) {
            case 'Phones':
                await this.categoryPhones.click()
                break
            case 'Laptops':
                await this.categoryLaptops.click()
                break
            case 'Monitors':
                await this.categoryMonitors.click()
                break
        }
        // Wait for products to update
        await this.productCards.first().waitFor({ state: 'visible' })
    }

    // Product Methods
    
    async selectProduct(productName: string) {
        await this.productTitles.filter({ hasText: productName }).click()
    }

    async selectFirstProduct() {
        await this.productTitles.first().click()
    }

    async getProductCount(): Promise<number> {
        return await this.productCards.count()
    }
}
