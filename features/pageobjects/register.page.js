

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class registerPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInBtn() { 
        return $('.css-1xtbc5b')
    }
    get createAccount() { 
        return $('//button[@data-automation-id="createAccountLink"]')
    }
    get inputFields () {
        return $$('.css-kohepr'); // email, password /1>2, 5,6  $$('#login)[0]
    }

    get checkBox () {
        return $('//input[@type="checkbox"]')
    }

   
    get btnCreateAccount () {
        return $('.css-r5fjhk')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register (index,emailAddress, password, verifyNewPassword) { 
        await this.signInBtn.click();
        await this.createAccount.click();
        await this.inputFields[index].setValue(emailAddress);// $$()[0]
        await this.inputFields[index+1].setValue(password);// $$()[1]
        await this.inputFields[index+2].setValue(verifyNewPassword);// $$()[2]
        await this.checkBox.click();
        await this.btnCreateAccount.click();
    }

    get welcomeMsg(){
        return $('.css-15b3uyd')
    }

    
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('Workday');
    }
}

module.exports = new registerPage();
