let env = process.env.ENV
if (!env) {
    env = "1";
  }

  export const configEnv = {
    ...((env === '1') && {
        baseURL: 'https://www.xxx1.com/'
      }),
      ...((env === '2') && {
        baseURL: 'https://pilot.xxx2.com/'
      }),

  }

export const mainCategories = ["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed"]
export const subCategoriesElectronic = ["do-eiusmod","tempor","incididunt","ut-labore","et-dolore","magna-aliqua","ut-enim","ad-minim","veniam"]
export const bottomCategoriesBeyazEsya = ["quis-nostrud","exercitation","ullamco-laboris","nisi-ut-aliquip","ex-ea-commodo","consequat","duis-aute","irure-dolor","in-reprehenderit"]
export const emailAndPass = {email : "lorem@ipsum.com", pass : "dolor1234"}


 
