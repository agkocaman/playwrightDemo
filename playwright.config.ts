import { devices } from "@playwright/test";
import { configEnv } from './config/config'
import { defineConfig } from '@playwright/test';
export default defineConfig({
  retries: 2,
  workers: process.env.CI ? 2 : undefined,
  timeout: 210 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  reporter: [['html', { outputFolder: 'report' }]],
  use: {
    headless: true,
    baseURL: configEnv.baseURL,
    trace: 'retain-on-failure',
    actionTimeout:40000,
    navigationTimeout: 70000,
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'setup',
      testMatch: /demo.spec\.ts/,
    },
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ["--disable-web-security", "--no-sandbox"],

        },
      },
      dependencies: ['setup'],
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        launchOptions: {
          args: ["--disable-web-security"],

        },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices["Desktop Webkit"],
        launchOptions: {
          args: ["--disable-web-security"],
        },
      },
    },
  ],
});