import { test as base, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { TestAgentsPage } from '../pages/TestAgentsPage'

type AppFixtures = {
    homePage: HomePage
    testAgentsPage: TestAgentsPage
}

export const test = base.extend<AppFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    testAgentsPage: async ({ page }, use) => {
        await use(new TestAgentsPage(page))
    }
})

export { expect } from '@playwright/test'