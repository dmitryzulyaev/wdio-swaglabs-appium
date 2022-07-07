const LoginScreen = require("../pages/loginScreenClass.js")
const ProductsScreen = require("../pages/productsScreen")

const userName = 'standard_user';
const password = 'secret_sauce';
const loginScreen = new LoginScreen(userName, password);

describe('SwagLabsApp', () => {

    it('LoginClass', async () => {
        await loginScreen.waitForOpen();
        await loginScreen.login();
        await ProductsScreen.waitForOpen();
    });
});
