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
