browser.ignoreSynchronization = true;

import Basepage from './basePage';
import search from './searchModule';

class LavaPage extends Basepage {
    constructor() {
        super();
        this.search = search;
        this.url = 'https://www.lavanguardia.com/';
        this.subsearch = element(by.css('[name="queryString"]'))
        this.hreflink = element.all(by.css('a[class="gs-title"]'))
    }

    buttonClick () {
        var searchBtn = element(by.css('[id="header-search-icon"]'));
        searchBtn.click();
        return browser.wait(this.isVisible(this.subsearch), this.timeout.xl)
    }

    generalClickWait(){
        browser.wait(this.isClickable(this.hreflink),this.timeout.xxl)
    }

}

export default new LavaPage(); 