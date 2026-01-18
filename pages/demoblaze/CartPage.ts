import { Locator, Page, expect } from '@playwright/test'

export class CartPage {
    readonly page: Page
    
    // Cart Table
    readonly cartTable: Locator
    readonly cartItems: Locator
    readonly cartTotal: Locator
    
    // Actions
    readonly btnPlaceOrder: Locator

    constructor(page: Page) {
        this.page = page
        
        // Cart Table
        this.cartTable = page.locator('#tbodyid')
        this.cartItems = page.locator('#tbodyid tr')
        this.cartTotal = page.locator('#totalp')
        
        // Actions
        this.btnPlaceOrder = page.getByRole('button', { name: 'Place Order' })
    }

    // Navigation Methods
    
    async open() {
        await this.page.getByRole('link', { name: 'Cart', exact: true }).click()
        await this.page.waitForURL('**/cart.html')
    }

    // Verification Methods
    
    async verifyPageLoaded() {
        await expect(this.btnPlaceOrder).toBeVisible()
    }

    async verifyProductInCart(productName: string) {
        await expect(this.cartTable).toContainText(productName)
    }

    async verifyCartHasItems() {
        await expect(this.cartItems.first()).toBeVisible()
    }

    async verifyItemCount(expectedCount: number) {
        await expect(this.cartItems).toHaveCount(expectedCount)
    }

    async verifyCartTotal(expectedPrice: number) {
        const total = await this.cartTotal.textContent()
        if (total === null) {
            throw new Error('Cart total element has no text content')
        }
        const totalNum = parseInt(total)
        expect(totalNum).toBeGreaterThan(0)
        expect(totalNum).toBe(expectedPrice)
    }

    async verifyCartIsEmpty() {
        await expect(this.cartItems).toHaveCount(0)
    }

    // Getter Methods
    
    async getCartTotal(): Promise<string> {
        const total = await this.cartTotal.textContent()
        if (total === null) {
            throw new Error('Cart total element has no text content')
        }
        return total
    }

    async getItemCount(): Promise<number> {
        return await this.cartItems.count()
    }

    // Action Methods
    
    async deleteItem(productName: string) {
        const row = this.page.locator('#tbodyid tr', { hasText: productName })
        await row.getByRole('link', { name: 'Delete' }).click()
        // Wait for item to be removed
        await expect(row).not.toBeVisible()
    }

    async placeOrder() {
        await this.btnPlaceOrder.click()
    }
}
