class LoginScreen {

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    get userNameField () { return $('[name="test-Username"]') }
    get passwordField () { return $('[name="test-Password"]') }
    get loginButton () { return $('[name="test-LOGIN"]') }

    async waitForOpen() {
       await (await this.loginButton).waitForDisplayed();
    }

    async login () {
        await (await this.userNameField).setValue(this.name);
        await (await this.passwordField).setValue(this.password);
        await (await this.loginButton).click();
    }
}

module.exports = LoginScreen;
