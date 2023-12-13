
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
        demoTestw: {
            notes: "demo",
            tag: "",
            run: async ({ page }) => {
                await page.goto(`${configEnv.baseURL}`, { timeout: 10000 })
                await expect(page).toHaveTitle("Cimri - En son kaça olur?")
            }
        },
    }
}


