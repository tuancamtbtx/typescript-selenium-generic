import { Builder, By, until } from 'selenium-webdriver'
export default abstract class AbstractBasePage {
  protected abstract readonly url: string

  public async open() {}
  async findById() {}
  async findByClassName() {}
  async findByCss() {}
  async findByLinkText() {}
  async findByName() {}
  async findByPartialLinkText() {}
  async findByTagName() {}
  async findByXpath() {}
  async findElement() {}
  async findElements() {}
  async wait() {}
}
