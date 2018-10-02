import lavaPage from '../pages/lavaPage';
import userData from '../data/userData';
import BasePage from '../pages/basePage';
import findid from '../data/findid';
import { element } from 'protractor';


describe('LavaGuardia Home page verification', function () {

    beforeEach(() => {
        lavaPage.goto();
        if (!findid.find) {
            console.log("find------id")
        } else {
            console.log("unable to find------id")

        }
        console.log("browser opened")
    })

    it('Search for text', () => {
        lavaPage.buttonClick();
        browser.sleep(4000);
        console.log("Search text", userData.searchData.goodeweb);
        lavaPage.search.forText(userData.searchData.goodeweb);
        /*  $$('[class="gsc-webResult gsc-result"] div a[class="gs-title"]').getText().then(function (txt) {
             console.log(txt)    
             console.log(txt.indexOf(userData.searchData.goodeweb))
         }) */
        $$('[class="gsc-webResult gsc-result"] div a[class="gs-title"]').each(function (ele, index) {
            ele.getText().then(function (txt) {
                if (txt == userData.searchData.goodeweb) {
                    console.log("found ", index, txt)
                    if (index == 0) {
                        console.log("found index is 0------")
                        lavaPage.generalClickWait()
                        element.all(by.css('a[class="gs-title"]')).get(index).click()
                    } else {
                        console.log("found index is more than zero")
                        element.all(by.css('a[class="gs-title"]')).get(index + 1).click()

                    }
                } else {
                    console.log("no match element found  :" + index, txt)
                }
            })

        })

        browser.sleep(100000)
        //to get all results class="gsc-results gsc-webResult"
        //[class="gsc-resultsbox-visible"]
    });
})