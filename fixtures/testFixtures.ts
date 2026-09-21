import { test as base, expect } from '@playwright/test';

// Extend this type as the suite gains shared page objects and test services.
type ProjectFixtures = Record<string, never>;

export const test = base.extend<ProjectFixtures>({});
export { expect };
