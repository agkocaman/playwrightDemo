let env = process.env.ENV
if (!env) {
    env = "1";
  }

  export const configEnv = {
    ...((env === '1') && {
        baseURL: 'https://www.cimri.com/'
      }),
      ...((env === '2') && {
        baseURL: 'https://pilot.cimri.com/'
      }),

  }

  export const mainCategories = ["elektronik","ev-yasam-ofis-kirtasiye","anne-bebek-oyuncak","saat-moda-taki","kitap-muzik-hobi","spor-outdoor","saglik-bakim-kozmetik","oto-bahce-yapi-market","pet"] 
  export const subCategoriesElectronic = ["beyaz-esya-mutfak","cep-telefonu","bilgisayar-yazilimlar","isitma-sogutma","goruntu-sistemleri","kisisel-bakim-gerecleri","fotograf-kamera","oyun-konsollari","giyilebilir-teknoloji-cihazlari"] 
  export const bottomCategoriesBeyazEsya = ["camasir-makineleri","buzdolaplari","camasir-kurutma-makineleri","bulasik-makineleri","derin-dondurucular","aspiratorler","endustriyel-mutfak-ekipmanlari","mini-midi-firinlar","ankastre-setler"] 
  export const emailAndPass = {email : "cmrgk0+cimripilot@gmail.com", pass : "x1x2x3x4"}

 