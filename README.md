# arrow prev
![tests](https://github.com/substrate-system/arrow-prev/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/arrow-prev?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/arrow-prev)](https://packagephobia.com/result?p=@substrate-system/arrow-prev)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

An icon button for going backwards.

[See a live demo](https://substrate-system.github.io/arrow-prev/)

<!-- toc -->

## install

```sh
npm i -S @substrate-system/arrow-prev
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/arrow-prev'
```

### Common JS
```js
require('@substrate-system/arrow-prev')
```

## CSS

### Import CSS

```js
import '@substrate-system/arrow-prev/css'
```

Or minified:
```js
import '@substrate-system/arrow-prev/css/min'
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@substrate-system/arrow-prev'
```

### HTML
```html
<div>
    <arrow-prev></arrow-prev>
</div>
```

### pre-built
This package exposes minified JS and CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/arrow-prev/dist/index.min.js ./public/arrow-prev.min.js
cp ./node_modules/@substrate-system/arrow-prev/dist/style.min.css ./public/arrow-prev.css
```

#### HTML
```html
<head>
    <link rel="stylesheet" href="./arrow-prev.css">
</head>
<body>
    <!-- ... -->
    <script type="module" src="./arrow-prev.min.js"></script>
</body>
```
