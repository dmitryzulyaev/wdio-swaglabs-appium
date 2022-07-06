const LoginScreen = require('../pages/loginScreen');
const ProductsScreen = require('../pages/productsScreen');
const CartScreen = require('../pages/cartScreen');
const Actions = require("../helpers/actions");
const CheckoutScreen = require('../pages/checkoutScreen');

describe('SwagLabsApp', () => {

    const userName = 'standard_user';
    const password = 'secret_sauce';
    const firstName = 'Jack';
    const lastName = 'Sparrow';
    const zipCode = '10101';

    it('Product purchase', async () => {

        await LoginScreen.waitForOpen();
        await LoginScreen.login(userName, password);
        await ProductsScreen.waitForOpen();
        await ProductsScreen.purchaseBackpack();
        await ProductsScreen.backToProducts();
        await ProductsScreen.purchaseBikeLights();
        await ProductsScreen.backToProducts();
        await ProductsScreen.gotoCart();
        await CartScreen.waitForOpen();
        await Actions.scrollDown();
        await CartScreen.gotoCheckout();
        await CheckoutScreen.fillInformation(firstName, lastName, zipCode);
        await CheckoutScreen.pressContinueButton();
        await Actions.scrollDown();
        await CheckoutScreen.pressFinishButton();
        await CheckoutScreen.checkoutIsComplete();
    }).timeout(100000);
});
