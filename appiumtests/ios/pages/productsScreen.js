const actions = require("../helpers/actions");
const productsTitleSelector = '[name="PRODUCTS"]';
const sauceLabsBackpackSelector = '//*[@label="Sauce Labs Backpack"]';
const addToCartSelector = '[name="test-ADD TO CART"]';
const backToProductsButtonSelector = '[name="test-BACK TO PRODUCTS"]';
const sauceLabsBikeLightSelector = '//*[@label="Sauce Labs Bike Light"]';
const cartButtonSelector = '[name="test-Cart"]';

async function waitForOpen() {
    const productsTitle = await $(productsTitleSelector);
    await productsTitle.waitForDisplayed();
}

async function purchaseBackpack() {
    const sauceLabsBackpack = await $(sauceLabsBackpackSelector);
    await sauceLabsBackpack.click();
    await actions.scrollDown();
    const addToCart = await $(addToCartSelector);
    await addToCart.click();
}

async function purchaseBikeLights() {
    const sauceLabsBikeLight = await $(sauceLabsBikeLightSelector);
    await sauceLabsBikeLight.click();
    await actions.scrollDown();
    const addToCart = await $(addToCartSelector);
    await addToCart.click();
}

async function backToProducts() {
    const backToProductsButton = await $(backToProductsButtonSelector);
    await backToProductsButton.click();
}

async function gotoCart() {
    const cartButton = await $(cartButtonSelector);
    await cartButton.click();
}

module.exports = {
    waitForOpen,
    purchaseBackpack,
    purchaseBikeLights,
    backToProducts,
    gotoCart
};
