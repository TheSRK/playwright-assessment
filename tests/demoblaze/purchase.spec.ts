import { test } from '../../fixures/page.fixures'
import testData from '../../testdata/testData.json'

test.describe('Demoblaze - Purchase Flow', () => {
    
    test('Guest user can complete a product purchase end-to-end', async ({ 
        homePage, 
        productDetailPage, 
        cartPage, 
        checkoutModal 
    }) => {
        // Test data from JSON
        const { productName, checkoutDetails } = testData.demoblaze.testData

        // Step 1: Open home page and verify it loads
        await test.step('Navigate to home page', async () => {
            await homePage.goToHomePage()
            await homePage.verifyPageLoaded()
        })

        // Step 2: Select a product from the catalog
        let productPrice: number
        await test.step('Select a product from catalog', async () => {
            await homePage.selectProduct(productName)
            await productDetailPage.verifyPageLoaded()
            productPrice = await productDetailPage.getProductPrice()
        })

        // Step 3: Add product to cart
        await test.step('Add product to cart', async () => {
            await productDetailPage.addToCart()
        })

        // Step 4: Navigate to cart and verify item
        await test.step('Open cart and verify product added', async () => {
            await cartPage.open()
            await cartPage.verifyProductInCart(productName)
            await cartPage.verifyItemCount(1)
            await cartPage.verifyCartTotal(productPrice)
        })

        // Step 5: Complete checkout flow
        await test.step('Complete checkout and verify purchase success', async () => {
            await cartPage.placeOrder()
            await checkoutModal.verifyModalVisible()
            await checkoutModal.fillForm(checkoutDetails)
            await checkoutModal.confirmPurchase()
            await checkoutModal.verifyPurchaseSuccess()
            await checkoutModal.verifyConfirmationAmount(productPrice)
        })

        // Step 6: Close confirmation
        await test.step('Close purchase confirmation', async () => {
            await checkoutModal.closePurchaseConfirmation()
        })
    })
})
