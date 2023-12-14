
import { expect } from "@playwright/test"
import { DemoPage } from "../../pages/demo"
import { configEnv, mainCategories } from "../../../config/config";


let demoPage : DemoPage


export const DemoWeb = {

    beforeEach: async ({ page }) => {
        demoPage = new DemoPage(page)
    },

    E2E: {
        demoTest: {
            notes: "homePageTitle",
            tag: "Cimri anasayfa title kontrol",
            run: async ({ page }) => {
                await page.goto(`${configEnv.baseURL}`, { timeout: 10000 })
                await expect(page).toHaveTitle("Cimri - En son kaça olur?")
            }
        },
        homePageLabel: {
            notes: "cimri anasayfa label kontrol",
            tag: "",
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.homePageLabelCimri).toHaveText("cimri")
                await expect(demoPage.homePageLabelCimriMarkette).toHaveText("cimri markette")
                await expect(demoPage.homePageLabelCimriFinans).toHaveText("cimri finans")
                const response = await page.request.get('https://cimri.com');
                await expect(response).toBeOK();
          },
        },
        mainCategoryStatus: {
            notes: "Cimri ana kategori status kontrol",
            tag: "",
            only:true,
            run: async ({ page }) => {
                let i: number = 0;
                do {
                    const response = await page.request.get(`${configEnv.baseURL}`+`${mainCategories[i]}`);
                    await expect(response).toBeOK()
                    i++;
                } while ( i < mainCategories.length)
          }
        }
    }

}