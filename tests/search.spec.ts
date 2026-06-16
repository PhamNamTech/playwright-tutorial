import { test, expect } from '../fixtures/test'

test.describe('Search Feature', () => {
    test('should show Test Agents page after searching for agents', async ({ page, homePage, testAgentsPage }) => {
        await test.step('Navigate to homepage', async () => {
            await homePage.navigate()
        })

        await test.step('Search for agents page', async () => {
            await homePage.search('agents')
        })

        await test.step('Verify Test Agents page', async () => {
            await expect(testAgentsPage.title).toContainText('Test Agents')
            await expect(page).toHaveURL(/test-agents/)
        })
    })
})