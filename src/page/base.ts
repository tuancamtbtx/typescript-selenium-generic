import {Builder, By, until} from 'selenium-webdriver'
export default abstract class BasePage {
    protected abstract readonly url: string
    
    public async open() {
    }
}