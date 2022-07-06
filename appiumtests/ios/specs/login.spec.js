const LoginScreen = require('../pages/loginScreen');
const ProductsScreen = require('../pages/productsScreen');

describe('SwagLabsApp', () => {

    const userName = 'standard_user';
    const password = 'secret_sauce';

    it('Login', async () => {
        await LoginScreen.waitForOpen();
        await LoginScreen.login(userName, password);
        await ProductsScreen.waitForOpen();
    });
});
