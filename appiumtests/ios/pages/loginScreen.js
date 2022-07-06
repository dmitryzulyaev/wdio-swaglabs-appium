const userNameSelector = '[name="test-Username"]';
const passwordSelector = '[name="test-Password"]';
const loginButtonSelector = '[name="test-LOGIN"]';

async function waitForOpen() {
    const loginButton = await $(loginButtonSelector);
    await loginButton.waitForDisplayed();
}

async function login(name, password) {
    const userNameField = await $(userNameSelector);
    await userNameField.setValue(name);
    const passwordField = await $(passwordSelector);
    await passwordField.setValue(password);
    const loginButton = await $(loginButtonSelector);
    await loginButton.click();
}

module.exports = {
    waitForOpen,
    login,
};
