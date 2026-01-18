import { Locator, Page, expect } from '@playwright/test'
import testData from '../../testdata/testData.json'

export interface CheckoutDetails {
    name: string
    country: string
    city: string
    creditCard: string
    month: string
    year: string
}

export class CheckoutModal {
    readonly page: Page
    
    // Modal Container
    readonly modal: Locator
    
    // Form Fields
    readonly fldName: Locator
    readonly fldCountry: Locator
    readonly fldCity: Locator
    readonly fldCreditCard: Locator
    readonly fldMonth: Locator
    readonly fldYear: Locator
    
    // Actions
    readonly btnPurchase: Locator
    readonly btnClose: Locator
    
    // Confirmation
    readonly confirmationModal: Locator
    readonly confirmationTitle: Locator
    readonly confirmationBody: Locator
    readonly btnOk: Locator

    constructor(page: Page) {
        this.page = page
        
        // Modal Container
        this.modal = page.locator('#orderModal')
        
        // Form Fields - using getByLabel since labels exist
        this.fldName = page.getByLabel('Name:', { exact: true })
        this.fldCountry = page.getByLabel('Country:')
        this.fldCity = page.getByLabel('City:')
        this.fldCreditCard = page.getByLabel('Credit card:')
        this.fldMonth = page.getByLabel('Month:')
        this.fldYear = page.getByLabel('Year:')
        
        // Actions
        this.btnPurchase = page.getByRole('button', { name: 'Purchase' })
        this.btnClose = page.locator('#orderModal .btn-secondary')
        
        // Confirmation
        this.confirmationModal = page.locator('.sweet-alert')
        this.confirmationTitle = page.locator('.sweet-alert h2')
        this.confirmationBody = page.locator('.sweet-alert p.lead')
        this.btnOk = page.getByRole('button', { name: 'OK' })
    }

    // Verification Methods
    
    async verifyModalVisible() {
        await expect(this.modal).toBeVisible()
    }

    async verifyPurchaseSuccess() {
        await expect(this.confirmationModal).toBeVisible()
        await expect(this.confirmationTitle).toHaveText(testData.demoblaze.successMessage)
    }

    // Form Methods
    
    async fillForm(details: CheckoutDetails) {
        await this.fldName.fill(details.name)
        await this.fldCountry.fill(details.country)
        await this.fldCity.fill(details.city)
        await this.fldCreditCard.fill(details.creditCard)
        await this.fldMonth.fill(details.month)
        await this.fldYear.fill(details.year)
    }

    // Action Methods
    
    async confirmPurchase() {
        await this.btnPurchase.click()
    }

    async closeModal() {
        await this.btnClose.click()
    }

    async closePurchaseConfirmation() {
        await this.btnOk.click()
    }

    // Getter Methods
    
    async getConfirmationAmount(): Promise<number> {
        const details = await this.confirmationBody.textContent()
        if (details === null) {
            throw new Error('Confirmation body element has no text content')
        }
        // Extract amount from "Amount: 360 USD"
        const match = details.match(/Amount:\s*(\d+)/)
        if (!match) {
            throw new Error(`Could not parse amount from: ${details}`)
        }
        return parseInt(match[1])
    }

    async verifyConfirmationAmount(expectedAmount: number) {
        const amount = await this.getConfirmationAmount()
        expect(amount).toBe(expectedAmount)
    }

    async getConfirmationDetails(): Promise<string> {
        const details = await this.confirmationBody.textContent()
        if (details === null) {
            throw new Error('Confirmation body element has no text content')
        }
        return details
    }
}
