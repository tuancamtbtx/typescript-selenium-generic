import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';



export default class SeleniumDriver {
    public async start() {
        // Start the selenium driver
    }
    public async getDriver() {
        // Get the selenium driver
        const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    }
    public async stop() {
        // Stop the selenium driver
    }
}