
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
            tag: "",
            run: async ({ page }) => {
                await page.goto(`${configEnv.baseURL}`, { timeout: 10000 })
                await expect(page).toHaveTitle("Cimri - En son kaça olur?")
            }
        },
        homePageLabel: {
            notes: "cimri  ana sayfa label kontrol",
            tag: "",
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.homePageLabelCimri).toHaveText("cimri")
                await expect(demoPage.homePageLabelCimriMarkette).toHaveText("cimri markette")
                await expect(demoPage.homePageLabelCimriFinans).toHaveText("cimri finans")
          },
        },
        mainCategoryStatus: {
            notes: "Cimri ana kategori status kontrol",
            tag: "",
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
            tag: "",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${subCategoriesElectronic[i]}`);
                    await expect(response).toBeOK()
                    await expect(demoPage.homePageLabelCimri).toHaveText("cimri")
                    i++;
                } while ( i < subCategoriesElectronic.length)
          }
        },
        bottomCategoryElectronicStatus: {
            notes: "Cimri dip kategori status kontrol",
            tag: "",
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
            notes: "Dip kategoride en düşük fiyat listelenmesi",
            tag: "",
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
            notes: "Dip kategoride en yüksek fiyat listelenmesi",
            tag: "",
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
            notes: "Dip kategoride fiyatı düşenler listelenmesi",
            tag: "",
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
            notes: "Dip kategoride en yeni ürünler listelenmesi",
            tag: "",
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${bottomCategoriesBeyazEsya[i]}`+"?sort=new%2Cdesc");
                    await expect(response).toBeOK()
                    i++;
                } while ( i < bottomCategoriesBeyazEsya.length)
          }
        }
    }

}