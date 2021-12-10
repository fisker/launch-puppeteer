import puppeteer from 'puppeteer-core'
import {findChrome} from 'find-chrome-bin'

async function launchBrowser(options) {
  let {executablePath} = {...options}

  if (!executablePath) {
    ;({executablePath} = await findChrome())
  }

  return puppeteer.launch({executablePath, ...options})
}

export default launchBrowser
export {puppeteer}
