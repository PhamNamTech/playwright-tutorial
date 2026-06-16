import { test, expect } from '../fixtures/test'

test.describe('Search Feature', () => {
    test('should show Test Agents page after searching for agents', async ({ page, homePage, testAgentsPage }) => {
        await homePage.navigate()
        await homePage.search('agents')

        await expect(testAgentsPage.title).toContainText('Test Agents')
        await expect(page).toHaveURL(/test-agents/)
    })
})