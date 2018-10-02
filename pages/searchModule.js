import BasePage from './basePage';

/**
 * search exists on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
class SearchModule extends BasePage {
    constructor() {
        super();
        this.boxicon = element(by.css('[id="header-search-icon"]'));
        this.box = element(by.css('input[name="queryString"]'));
        this.resultsPage = element(by.css('[class="gsc-result-info"]'));
        this.noResultsMsg = element(by.cssContainingText('h2', 'No posts found. Please try a different search.'));
    }

    forText (text) {
        this.box.sendKeys(text);
        this.hitEnter();
        return browser.wait(this.isVisible(this.resultsPage), this.timeout.l);
    }
}
export default new SearchModule();


// class="gsc-resultsbox-visible"