import { expect, test } from "@playwright/test"
import { DemoPage } from "../../pages/demo"
import { bottomCategoriesBeyazEsya, configEnv, emailAndPass, mainCategories, subCategoriesElectronic } from "../../../config/config";
import { createEvalAwarePartialHost } from "ts-node/dist/repl";


let demoPage : DemoPage


export const DemoWeb = {

    beforeEach: async ({ page }) => {
        demoPage = new DemoPage(page)
    },

    E2E: {
        hemoPageTitle: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto(`${configEnv.baseURL}`)
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
            }
        },
        homePageLabel: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.homePageLabelx).toHaveText("Lorem ipsum")
                await expect(demoPage.homePageLabelxMarkette).toHaveText("Lorem ipsum")
                await expect(demoPage.homePageLabelxFinans).toHaveText("Lorem ipsum")
          },
        },
        productSearch: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@mobile",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.iconSearch.click()
                await expect(demoPage.searchBoxContainer).toBeVisible()
                await demoPage.searchInput.fill("Lorem ipsum")
                await page.keyboard.press('Enter')
                const response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveURL("arama?q=Lorem%20ipsum")
          },
        },
        productSearchDetail:{
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.iconSearch.click()
                await expect(demoPage.searchBoxContainer).toBeVisible()
                await demoPage.searchInput.fill("Lorem ipsum")
                await page.keyboard.press('Enter')
                await expect(page).toHaveURL("arama?q=Lorem%20ipsum")
                await expect(demoPage.searchDetailCardContentFirst).toBeVisible()
                await demoPage.searchDetailCardContentFirst.click()
                const response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(demoPage.detailProductCardTitle).toBeVisible()
            }
        },
        mainCategoryStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${mainCategories[i]}`);
                    await expect(response).toBeOK()
                    i++;
                } while ( i < mainCategories.length)
          }
        },
        subCategoryElectronicStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${subCategoriesElectronic[i]}`);
                    await expect(response).toBeOK()
                    i++;
                } while ( i < subCategoriesElectronic.length)
          }
        },
        bottomCategoryElectronicStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${bottomCategoriesBeyazEsya[i]}`);
                    await expect(response).toBeOK()
                    i++;
                } while ( i < bottomCategoriesBeyazEsya.length)
          }
        },
        lowestPriceStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${bottomCategoriesBeyazEsya[i]}`+"?sort=price%2Casc");
                    await expect(response).toBeOK()
                    i++;
                } while ( i < bottomCategoriesBeyazEsya.length)
          }
        },
        highestPriceStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@mobile, @web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${bottomCategoriesBeyazEsya[i]}`+"?sort=price%2Cdesc");
                    await expect(response).toBeOK()
                    i++;
                } while ( i < bottomCategoriesBeyazEsya.length)
          }
        },
        discountedPricesStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@mobile, @web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${bottomCategoriesBeyazEsya[i]}`+"?sort=discount%2Cdesc");
                    await expect(response).toBeOK()
                    i++;
                } while ( i < bottomCategoriesBeyazEsya.length)
          }
        },
        newProductsStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${bottomCategoriesBeyazEsya[i]}`+"?sort=new%2Cdesc");
                    await expect(response).toBeOK()
                    i++;
                } while ( i < bottomCategoriesBeyazEsya.length)
          }
        },
        priceDropsStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.saleDiscountIcon.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await page.goto("indirimli-urunler?sort=price%2Casc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await page.goto("indirimli-urunler?sort=price%2Cdesc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await page.goto("indirimli-urunler?sort=discount%2Cdesc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await page.goto("indirimli-urunler?sort=new%2Cdesc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
          }
        },
        brochuresStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.brochureIcon.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await demoPage.a101brochureIcon.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await demoPage.a101brochureFirst.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
          }
        },
        brochuresMobileStatus: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "",
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.brochureMobileSeeAll).toBeVisible()
                await demoPage.brochureMobileSeeAll.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await demoPage.a101brochureIcon.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await demoPage.a101brochureFirstMobile.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
          }
        },
        loginUser: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@web",
            skip:true,
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.loginIcon.hover()
                await expect(demoPage.accountModalMenuListContainer).toBeVisible()
                await expect(demoPage.signInLnk).toBeVisible()
                await demoPage.signInLnk.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem")
                await demoPage.emailInput.fill("Lorem ipsum")
                await demoPage.passwordInput.fill("Lorem ipsum")
                await expect(demoPage.signInBtn).toBeVisible()
                await demoPage.signInBtn.click()
                await expect(page).toHaveURL(/Lorem-ipsum/)
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
          }
        },
        loginUserMobile: {
            notes: "Lorem ipsum dolor sit amet",
            tag: "@mobile",
            skip:true,
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.loginIcon).toBeVisible()
                await demoPage.loginIcon.click()
                await expect(demoPage.accountModalMobile).toBeVisible()
                await expect(demoPage.loginBtnMobile).toBeVisible()
                await demoPage.loginBtnMobile.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
                await demoPage.emailInput.fill("Lorem ipsum")
                await demoPage.passwordInput.fill("Lorem ipsum")
                await expect(demoPage.signInBtn).toBeVisible()
                await demoPage.signInBtn.click()
                await expect(page).toHaveURL(/Lorem-ipsum/)
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Lorem ipsum dolor sit amet")
          }
        },       
    }
}
