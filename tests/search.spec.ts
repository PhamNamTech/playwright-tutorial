import { test, expect } from '../fixtures/test'

test.describe('Search Feature', () => {
    test('should display Playwright Test Agents heading', async ({ homePage, testAgentsPage }) => {
        await homePage.goto()
        await homePage.search('agents')
        await expect(testAgentsPage.title).toBeVisible()
    })
})