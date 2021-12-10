import {test} from 'uvu'
import * as assert from 'uvu/assert'
import launchBrowser from './index.js'

test('main', async () => {
  const browser = await launchBrowser()

  const page = await browser.newPage()
  await page.goto('about:blank')
  const width = await page.evaluate(() => window.innerWidth)

  assert.is(width, 800)
})
