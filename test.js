import test from 'ava'
import launchBrowser from './index.js'

test('main', async (t) => {
  const browser = await launchBrowser()

  const page = await browser.newPage()
  await page.goto('about:blank')
  const width = await page.evaluate(() => window.innerWidth)

  t.is(width, 800)
})
