

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInBtn() { 
        return $('.css-1xtbc5b')
    }
    get inputField () {
        return $$('.css-kohepr'); 
    }

   
    get btnSubmit () {
        return $("//div[@aria-label='Sign In']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (index0,username, index1, password) {
        await this.signInBtn.click();
        await this.inputField[index0].setValue(username);
        await this.inputField[index1].setValue(password);
        await this.btnSubmit.click();
    }

        get getHeader(){
        return $("//h1")
          }

        get getLogo(){
            return $("//img[@data-automation-id='logo']")
        }

        get getBanner(){
        return $("//img[@src='/Workday/assets/banner']")
        }

        get getHeaderButtons(){
            return $$('.css-1t3kk9u')
        }

        async getTextLogo(){
            return await this.getLogo.isDisplayed()
        }

        async getBannerText(){
            return await this.getBanner.isDisplayed()
        }

        async getTextHeaderButtons(index){
            return await this.getHeaderButtons[index].getText()
        }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('Workday');
    }
}

module.exports = new LoginPage();
