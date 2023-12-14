import { expect, Locator, Page } from "@playwright/test";
export class DemoPage {
    page: Page;
    homePageLabelCimri : Locator;
    homePageLabelCimriMarkette : Locator;
    homePageLabelCimriFinans : Locator;

    constructor(page: Page) {
        this.page = page
        this.homePageLabelCimri = page.locator('a[aria-label="cimri anasayfa"]')
        this.homePageLabelCimriMarkette = page.locator("a[aria-label='cimri markette']")
        this.homePageLabelCimriFinans = page.locator("div:has(>a[aria-label='cimri anasayfa']) > a:nth-of-type(3)")
        

    }
}