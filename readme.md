# launch-puppeteer

[![Build Status][github_actions_badge]][github_actions_link]
[![Coverage][coveralls_badge]][coveralls_link]
[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]

[github_actions_badge]: https://img.shields.io/github/workflow/status/fisker/launch-puppeteer/CI/main?style=flat-square
[github_actions_link]: https://github.com/fisker/launch-puppeteer/actions?query=branch%3Amain
[coveralls_badge]: https://img.shields.io/coveralls/github/fisker/launch-puppeteer/main?style=flat-square
[coveralls_link]: https://coveralls.io/github/fisker/launch-puppeteer?branch=main
[license_badge]: https://img.shields.io/npm/l/prettier-format.svg?style=flat-square
[license_link]: https://github.com/fisker/launch-puppeteer/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/launch-puppeteer.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/launch-puppeteer

> Launch puppeteer browser

Launch installed chrome without downloading chromium bin.

```diff
- import puppeteer from 'puppeteer'
+ import launchBrowser from 'launch-puppeteer'

- const browser = await puppeteer.launch()
+ const browser = await launchBrowser()
```

## Installation

```bash
yarn add launch-puppeteer
```

## Usage

```js
import launchBrowser from 'launch-puppeteer'

const browser = await launchBrowser()

console.log(browser)
//=> Browser {...}
```
