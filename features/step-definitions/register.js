const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const registerPage = require('../pageobjects/register.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^ (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I go through the registration process with (.*) , (.*) and (.*)$$/, async (username, password, verifyPassword) => {
    let num = Math.floor(Math.random() * 10);
    username = num+username
    await registerPage.register(0,username,password,verifyPassword)
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
