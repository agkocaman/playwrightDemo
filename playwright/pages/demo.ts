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
    saleDiscountIcon : Locator;
    brochureIcon :Locator;
    a101brochureIcon : Locator;
    a101brochureFirst : Locator;
    a101brochureFirstMobile : Locator;
    loginIcon : Locator;
    accountModalMenuListContainer : Locator;
    signInLnk : Locator; 
    emailInput : Locator;
    passwordInput : Locator;
    signInBtn : Locator;
    accountModalMobile : Locator;
    loginBtnMobile : Locator;
    brochureMobileSeeAll : Locator;

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
        this.saleDiscountIcon = page.locator("button>.cimri-icon-sale-discount-promotion")
        this.brochureIcon = page.locator("button>.cimri-icon-brochures")
        this.a101brochureIcon = page.locator("a[title='A101']")
        this.a101brochureFirst = page.locator("//div[1]/a[contains(@href, 'a101-com-tr?id')]")
        this.a101brochureFirstMobile = page.locator("//a[contains(@href, 'a101-com-tr?id')][1]")
        this.loginIcon = page.locator("button>.cimri-icon-avatar-login")
        this.accountModalMenuListContainer = page.locator("//div[contains(@class, 'AccountModal_menuListItemContainer')]")
        this.signInLnk = page.locator("//a[contains(@class, 'MenuCategoryItem_menuCategoryItemContainer')][1]")
        this.emailInput = page.locator("//div[1]/div/form//input[@id='email']")
        this.passwordInput = page.locator("#password")
        this.signInBtn = page.locator("//button/span[.='Giriş Yap']")
        this.accountModalMobile = page.locator("//div[contains(@class, 'AccountModal_menu')]/div[contains(@class, 'Modal_mobile')]")
        this.loginBtnMobile = page.locator("a>.cimri-icon-avatar-login")
        this.brochureMobileSeeAll = page.locator("a[href*='brosur']>span")
        

        
    }
}