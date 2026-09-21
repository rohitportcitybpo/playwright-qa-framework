export interface TestEnvironment {
  name: string;
  baseURL: string;
  apiURL: string;
}

export const env: TestEnvironment = {
  name: process.env.TEST_ENV ?? 'local',
  baseURL: process.env.PM_BASE_URL ?? 'http://localhost:3000',
  apiURL: process.env.PM_API_URL ?? 'http://localhost:3000/api',
};
