import { Page, Locator } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly searchButton: Locator
    readonly searchInput: Locator
    readonly playwrightTestAgentsLink: Locator

    constructor(page: Page) {
        this.page = page
        this.searchButton = page.getByRole("button", { name: "Search" })
        this.searchInput = page.getByRole("searchbox", { name: "Search" })
        this.playwrightTestAgentsLink = page.getByRole("link", { name: "Playwright Test Agents", exact: true })
    }

    async goto() {
        await this.page.goto('/')
    }

    async search(input: string) {
        await this.searchButton.click()
        await this.searchInput.fill(input)

        await this.playwrightTestAgentsLink.click()
    }
}