
import { expect } from "@playwright/test"
import { DemoPage } from "../../pages/demo"
import { configEnv } from "../../../config/config";


let demoPage : DemoPage


export const DemoWeb = {

    beforeEach: async ({ page }) => {
        demoPage = new DemoPage(page)
    },

    E2E: {
        demoTest: {
            notes: "demo",
            tag: "",
            run: async ({ page }) => {
                await page.goto(`${configEnv.baseURL}`, { timeout: 10000 })
                await expect(page).toHaveTitle("Cimri - En son kaça olur?")
            }
        },
        homePageLabel: {
            notes: "cimri anasayfa label kontrol",
            tag: "",
            only:true,
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.homePageLabelCimri).toHaveText("cimri")
                await expect(demoPage.homePageLabelCimriMarkette).toHaveText("cimri markette")
                await expect(demoPage.homePageLabelCimriFinans).toHaveText("cimri finans")
            }
        },
    }
}


