let env = process.env.ENV
if (!env) {
    env = "1";
  }

  export const configEnv = {
    ...((env === '1') && {
        baseURL: 'https://www.cimri.com/'
      }),

  }