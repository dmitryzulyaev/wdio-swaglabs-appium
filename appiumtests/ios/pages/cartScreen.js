const yourCartSelector = '[name="YOUR CART"]';
const checkoutSelector = '[name="test-CHECKOUT"]';

async function waitForOpen() {
    const yourCart = await $(yourCartSelector);
    await yourCart.waitForDisplayed();
}

async function gotoCheckout() {
    const checkout = await $(checkoutSelector);
    await checkout.click();
}

module.exports = {
    waitForOpen,
    gotoCheckout,
};
