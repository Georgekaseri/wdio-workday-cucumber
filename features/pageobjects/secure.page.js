

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $("//button[@data-automation-id='legalNoticeAcceptButton']");
    }

    async clickOnFlashAlert () {
        return await this.flashAlert.click()
    }
}

module.exports = new SecurePage();
