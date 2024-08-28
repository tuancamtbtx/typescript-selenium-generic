import { Builder, By, until } from 'selenium-webdriver'
export default abstract class AbstractBasePage {
  protected abstract readonly url: string
  
  abstract getDriver(): Promise<Builder>
  public async open() {
    const driver = await this.getDriver()
    await driver.get(this.url)
    return driver
  }
  async findById() {
    const driver = await this.open()
    const element = await driver.findElement(By.id('elementId'))
    return element
  }
  async findByClassName() {
    const driver = await this.open()
    const element = await driver.findElement(By.className('elementClassName'))
    return element
  }
  async findByCss() {
    const driver = await this.open()
    const element = await driver.findElement(By.css('elementCss'))
    return element
  }
  async findByLinkText() {
    const driver = await this.open()
    const element = await driver.findElement(By.linkText('elementLinkText'))
    return element
  }
  async findByName() {
    const driver = await this.open()
    const element = await driver.findElement(By.name('elementName'))
    return element
  }
  async findByPartialLinkText() {
    const driver = await this.open()
    const element = await driver.findElement(By.partialLinkText('elementPartialLinkText'))
    return element
  }
  async findByTagName() {
    const driver = await this.open()
    const element = await driver.findElement(By.tagName('elementTagName'))
    return element
  }
  async findByXpath() {
    const driver = await this.open()
    const element = await driver.findElement(By.xpath('elementXpath'))
    return element
  }
  async findElement() {
    const driver = await this.open()
    const element = await driver.findElement(By.id('elementId'))
    return element
  }
  async findElements() {
    const driver = await this.open()
    const elements = await driver.findElements(By.id('elementId'))
    return elements
  }
  async wait() {
    const driver = await this.open()
    await driver.wait(until.elementLocated(By.id('elementId')))
    return driver
  }
}
