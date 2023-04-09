

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchJob extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchJob() { 
        return $('#h3ca2')
    }
    get inputField () {
        return $$('.css-d6c2kf'); 
    }

   
    get btnSubmit () {
        return $("//div[@aria-label='Sign In']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchJob (index0,username, index1, password) {
        await this.inputSearchJob.click();
        await this.inputField[index0].setValue(username);
        await this.inputField[index1].setValue(password);
        await this.btnSubmit.click();
    }

    async getTitle(){
        const ele = $("//h1")
        return await ele.getText()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('Workday');
    }
}

module.exports = new SearchJob();
