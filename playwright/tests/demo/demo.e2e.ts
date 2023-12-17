
import { expect } from "@playwright/test"
import { DemoPage } from "../../pages/demo"
import { bottomCategoriesBeyazEsya, configEnv, mainCategories, subCategoriesElectronic } from "../../../config/config";


let demoPage : DemoPage


export const DemoWeb = {

    beforeEach: async ({ page }) => {
        demoPage = new DemoPage(page)
    },

    E2E: {
        hemoPageTitle: {
            notes: "Ana sayfa title kontrol",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto(`${configEnv.baseURL}`, { timeout: 10000 })
                await expect(page).toHaveTitle("Cimri - En son kaça olur?")
            }
        },
        homePageLabel: {
            notes: "Cimri  ana sayfa label kontrol",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.homePageLabelCimri).toHaveText("cimri")
                await expect(demoPage.homePageLabelCimriMarkette).toHaveText("cimri markette")
                await expect(demoPage.homePageLabelCimriFinans).toHaveText("cimri finans")
          },
        },
        productSearch: {
            notes: "Ürün arama",
            tag: "@mobile, @web",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.iconSearch.click()
                await expect(demoPage.searchBoxContainer).toBeVisible()
                await demoPage.searchInput.fill("iphone 15")
                await page.keyboard.press('Enter')
                const response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveURL("arama?q=iphone%2015")
          },
        },
        productSearchDetail:{
            notes: "Ürün arama sonrası detay sayfasına gitme",
            tag: " @web",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.iconSearch.click()
                await expect(demoPage.searchBoxContainer).toBeVisible()
                await demoPage.searchInput.fill("iphone 15")
                await page.keyboard.press('Enter')
                await expect(page).toHaveURL("arama?q=iphone%2015")
                await expect(demoPage.searchDetailCardContentFirst).toBeVisible()
                await demoPage.searchDetailCardContentFirst.click()
                const response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(demoPage.detailProductCardTitle).toBeVisible()
            }
        },
        mainCategoryStatus: {
            notes: "Cimri ana kategori status kontrol",
            tag: "@mobile, @web",
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
            notes: "Cimri alt kategori status kontrol",
            tag: "@mobile, @web",
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
            notes: "Cimri dip kategori status kontrol",
            tag: "@mobile, @web",
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
            notes: "Dip kategoride en düşük fiyat listelenmesi status kontrol",
            tag: "@mobile, @web",
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
            notes: "Dip kategoride en yüksek fiyat listelenmesi status kontrol",
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
            notes: "Dip kategoride fiyatı düşenler listelenmesi status kontrol",
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
            notes: "Dip kategoride en yeni ürünler listelenmesi status kontrol",
            tag: "@mobile, @web",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${bottomCategoriesBeyazEsya[i]}`+"?sort=new%2Cdesc");
                    await expect(response).toBeOK()
                    i++;
                } while ( i < bottomCategoriesBeyazEsya.length)
          }
        },

    }

}