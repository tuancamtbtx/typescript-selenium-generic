import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';



export default class SeleniumDriver {
    driver: WebDriver;
    public async start() {
        // Start the selenium driver
    }
    public async getDriver(options:[key:string]) : Promise<WebDriver> {
        // Get the selenium driver
        const driver = new Builder()
        .options(options)
        .withCapabilities(Capabilities.chrome()).build();
        return driver;
    }
    public async stop() {
        this.driver.quit();
    }
}