import * as fs from 'fs'
import yaml from 'js-yaml'
import ejs from 'ejs'
import loggers from './logger'
/**
 * Reads and parses a YAML configuration file.
 * @param configPath - The path to the YAML configuration file.
 * @returns A promise that resolves to a JSON object representing the parsed configuration.
 * @throws If the configuration file is invalid or cannot be read.
 */
const readConfigYaml = async (configPath: string): Promise<any> => {
  const configTemplate = await fs.readFileSync(configPath, 'utf8')
  const configString = ejs.render(configTemplate)
  try {
    const config = yaml.load(configString, 'utf-8')
    return config
  } catch (e) {
    loggers.error(e)
    throw new Error('Invalid config')
  }
}
