#! /usr/bin/env node
/* global process */
import { Command } from 'commander'
import figlet from 'figlet'

console.log(figlet.textSync('Cloud Billing Query'))
const program: Command = new Command()

program
  .version('1.0.0')
  .description('An example CLI for Automation Selenium Webdriver')
  .argument('file_config', 'Config file path')
  .action(async (config) => {

  })
  .parse(process.argv)
