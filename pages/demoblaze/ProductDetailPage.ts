import { Locator, Page, expect } from '@playwright/test'

export class ProductDetailPage {
    readonly page: Page
    
    // Product Info
    readonly productName: Locator
    readonly productPrice: Locator
    readonly productDescription: Locator
    
    // Actions
    readonly btnAddToCart: Locator

    constructor(page: Page) {
        this.page = page
        
        // Product Info
        this.productName = page.locator('.name')
        this.productPrice = page.locator('.price-container')
        this.productDescription = page.locator('#more-information p')
        
        // Actions
        this.btnAddToCart = page.getByRole('link', { name: 'Add to cart' })
    }

    // Verification Methods
    
    async verifyPageLoaded() {
        await expect(this.btnAddToCart).toBeVisible()
    }

    async verifyProductName(expectedName: string) {
        await expect(this.productName).toContainText(expectedName)
    }

    async getProductName(): Promise<string> {
        const name = await this.productName.textContent()
        if (name === null) {
            throw new Error('Product name element has no text content')
        }
        return name
    }

    async getProductPrice(): Promise<number> {
        const priceText = await this.productPrice.textContent()
        if (priceText === null) {
            throw new Error('Product price element has no text content')
        }
        // Extract number from price string like "$360 *includes tax"
        const match = priceText.match(/\$(\d+)/)
        if (!match) {
            throw new Error(`Could not parse price from: ${priceText}`)
        }
        return parseInt(match[1])
    }

    // Action Methods
    
    async addToCart() {
        // Set up dialog handler and wait for it
        const dialogPromise = this.page.waitForEvent('dialog')
        await this.btnAddToCart.click()
        const dialog = await dialogPromise
        await dialog.accept()
    }
}
