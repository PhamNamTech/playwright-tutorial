import { Page, Locator } from '@playwright/test'

export class TestAgentsPage {
    readonly page: Page
    readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.title = page.getByRole("heading", { name: "Playwright Test Agents" })
    }
}