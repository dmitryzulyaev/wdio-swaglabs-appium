const firstNameFieldSelector = '[name="test-First Name"]';
const lastNameFieldSelector = '[name="test-Last Name"]';
const zipCodeFieldSelector = '//*[@name="test-Zip/Postal Code"]';
const continueButtonSelector = '[name="test-CONTINUE"]';
const finishButtonSelector = '[name="test-FINISH"]';
const checkoutCompleteSelector = '//*[@name="CHECKOUT: COMPLETE!"]';
const thankYouTitleSelector = '[name="THANK YOU FOR YOU ORDER"]';


async function fillInformation(firstName, lastName, zipCode) {
    const firstNameField = await $(firstNameFieldSelector);
    await firstNameField.setValue(firstName);
    const lastNameField = await $(lastNameFieldSelector);
    await lastNameField.setValue(lastName);
    const zipCodeField = await $(zipCodeFieldSelector);
    await zipCodeField.setValue(zipCode);
}

async function pressContinueButton() {
    const continueButton = await $(continueButtonSelector);
    await continueButton.click();
}

async function pressFinishButton() {
    const finishButton = await $(finishButtonSelector);
    await finishButton.click();
}

async function checkoutIsComplete() {
    const checkoutComplete = await $(checkoutCompleteSelector);
    await checkoutComplete.waitForDisplayed();
    const thankYouTitle = await $(thankYouTitleSelector);
    await thankYouTitle.waitForDisplayed();
}

module.exports = {
    fillInformation,
    pressContinueButton,
    pressFinishButton,
    checkoutIsComplete
};
