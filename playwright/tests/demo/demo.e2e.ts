
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
            notes: "Ana sayfa title kontrol",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto(`${configEnv.baseURL}`)
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
            tag: "@mobile",
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
            tag: "@web",
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
            notes: "Cimri alt kategori status kontrol",
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
            notes: "Cimri dip kategori status kontrol",
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
            notes: "Dip kategoride en düşük fiyat listelenmesi status kontrol",
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
            notes: "Fiyatı düşünler sayfasında, en düşük, yüksek fiyat ve fiyayı düşen , en yeni ürünler status ve title kontrol",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.saleDiscountIcon.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("İndirimli Ürünler ve Günün İndirimleri")
                await page.goto("indirimli-urunler?sort=price%2Casc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("İndirimli Ürünler ve Günün İndirimleri")
                await page.goto("indirimli-urunler?sort=price%2Cdesc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("İndirimli Ürünler ve Günün İndirimleri")
                await page.goto("indirimli-urunler?sort=discount%2Cdesc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("İndirimli Ürünler ve Günün İndirimleri")
                await page.goto("indirimli-urunler?sort=new%2Cdesc")
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("İndirimli Ürünler ve Günün İndirimleri")
          }
        },
        brochuresStatus: {
            notes: "Broşürler sayfası ve a101 sayfasında status ve title kontrolü",
            tag: "@web",
            run: async ({ page }) => {
                await page.goto("")
                await demoPage.brochureIcon.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Güncel Broşürler ve İndirim Katalogları")
                await demoPage.a101brochureIcon.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("A101 Aktüel Kataloğu ve A101 İndirim Broşürü")
                await demoPage.a101brochureFirst.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
          }
        },
        brochuresMobileStatus: {
            notes: "Mobilde Broşürler sayfası ve a101 sayfasında status ve title kontrolü",
            tag: "",
            run: async ({ page }) => {
                await page.goto("")
                await expect(demoPage.brochureMobileSeeAll).toBeVisible()
                await demoPage.brochureMobileSeeAll.click()
                let response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Güncel Broşürler ve İndirim Katalogları")
                await demoPage.a101brochureIcon.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("A101 Aktüel Kataloğu ve A101 İndirim Broşürü")
                await demoPage.a101brochureFirstMobile.click()
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
          }
        },
        loginUser: {
            notes: "Kullanıcı giriş yaptıktan sonra status ve title kontrolleri",
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
                await expect(page).toHaveTitle("Üye Girişi")
                await demoPage.emailInput.fill(emailAndPass.email)
                await demoPage.passwordInput.fill(emailAndPass.pass)
                await expect(demoPage.signInBtn).toBeVisible()
                await demoPage.signInBtn.click()
                await expect(page).toHaveURL(/giris-basarili/)
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Giriş Başarılı")
          }
        },
        loginUserMobile: {
            notes: "Kullanıcı giriş yaptıktan sonra status ve title kontrolleri",
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
                await expect(page).toHaveTitle("Üye Girişi")
                await demoPage.emailInput.fill(emailAndPass.email)
                await demoPage.passwordInput.fill(emailAndPass.pass)
                await expect(demoPage.signInBtn).toBeVisible()
                await demoPage.signInBtn.click()
                await expect(page).toHaveURL(/giris-basarili/)
                response = await page.request.get(page.url());
                await expect(response).toBeOK()
                await expect(page).toHaveTitle("Giriş Başarılı")
          }
        },       
    }
}