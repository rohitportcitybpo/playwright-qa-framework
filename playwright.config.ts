import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environments';

export default defineConfig({
  testDir: './tests',
  outputDir: './traces',
  timeout: 60_000,
  expect: { timeout: 10_000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['list'],
    ['html', { outputFolder: './reports/html', open: 'never' }],
    ['junit', { outputFile: './reports/junit/results.xml' }],
  ],

  use: {
    baseURL: env.baseURL,
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    screenshot: 'only-on-failure',
    video: { mode: 'retain-on-failure', size: { width: 1280, height: 720 } },
    trace: 'retain-on-failure',
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
