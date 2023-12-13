import { expect, Locator, Page } from "@playwright/test";
export class DemoPage {
    page: Page

    constructor(page: Page) {
        this.page = page

    }
}