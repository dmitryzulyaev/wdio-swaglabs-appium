class loginScreen {

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    get loginButtonSelector () { return $('[name="test-LOGIN"]') }
    get userNameSelector () { return $('[name="test-Username"]') }
    get passwordSelector () { return $('[name="test-Password"]') }

    async waitForOpen() {
        const loginButton = await $(this.loginButtonSelector);
        await loginButton.waitForDisplayed();
    }

    async login () {
        const userNameField = await $(this.userNameSelector);
        await userNameField.setValue(this.name);
        const passwordField = await $(this.passwordSelector);
        await passwordField.setValue(this.password);
        const loginButton = await $(this.loginButtonSelector);
        await loginButton.click();
    }
}

export default new loginScreen();
