const { Given, When, Then } = require('@wdio/cucumber-framework');
const {assert} = require('chai');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await SecurePage.clickOnFlashAlert()
});

When(/^I login with (.*) and (.*)$$/, async (username, password) => {
    await LoginPage.login(0,username,1,password)
});

Then(/^I should see welcome saying (.*)$/, async (message) => {
    await expect(LoginPage.getHeader).toBeExisting();
    await expect(LoginPage.getHeader).toHaveTextContaining(message);
    
});


When(/^I see the contents of the Workday saying (.*)$/, async(banner) => {
    let getBanner = await LoginPage.getBannerText()
    getBanner = String(getBanner) //convert boolean to string
	assert.equal(getBanner, banner);
});

Then(/^I should verify each contents of the Workday (.*),(.*),(.*),(.*)and (.*)$$/, async(logo, button1, button2, button3, button4) => {
    let getLogo = await LoginPage.getTextLogo()
    getLogo = String(getLogo) // convert boolean to string
    assert.equal(getLogo, logo)
    for(let i = 0; i <4; i++){
        let buttons= [button1, button2, button3, button4]
        let verifyText = await LoginPage.getTextHeaderButtons(i)
        verifyText = verifyText.replace(/\s/g, ''); // remove space from string
        let verifyButton = buttons[i].replace(/\s/g, ''); // remove space from string
        assert.equal(verifyText,verifyButton) 
    }


    });


