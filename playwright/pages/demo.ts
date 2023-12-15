import { expect, Locator, Page } from "@playwright/test";
export class DemoPage {
    page: Page;
    homePageLabelCimri : Locator;
    homePageLabelCimriMarkette : Locator;
    homePageLabelCimriFinans : Locator;
    iconSearch : Locator;
    searchBoxContainer : Locator;
    searchInput : Locator;
    searchDetailCardContentFirst : Locator;
    detailProductCardTitle : Locator;

    constructor(page: Page) {
        this.page = page
        this.homePageLabelCimri = page.locator('a[aria-label="cimri anasayfa"]')
        this.homePageLabelCimriMarkette = page.locator("a[aria-label='cimri markette']")
        this.homePageLabelCimriFinans = page.locator("div:has(>a[aria-label='cimri anasayfa']) > a:nth-of-type(3)")
        this.iconSearch = page.locator("div >.cimri-icon-search")
        this.searchBoxContainer = page.locator("//div[contains(@class,'SearchBox_searchBoxContainer')]")
        this.searchInput = page.locator("#search-input")
        this.searchDetailCardContentFirst = page.locator("div[data-component='LISTINGMAIN']:nth-of-type(1)")
        this.detailProductCardTitle = page.locator("//h1[contains(@class,'ProductCard_title')]")
    }
}