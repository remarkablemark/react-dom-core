# react-dom-core

[![build](https://github.com/remarkablemark/react-dom-core/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/react-dom-core/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/remarkablemark/react-dom-core/branch/master/graph/badge.svg?token=7SBKW68CLE)](https://codecov.io/gh/remarkablemark/react-dom-core)

Monorepo containing the packages:

<!-- prettier-ignore-start -->
| Package | Version | Description |
| --- | --- | --- |
| [react-15](packages/react-15) | [![NPM version](https://img.shields.io/npm/v/react-15.svg)](https://www.npmjs.com/package/react-15) | Copy of `react` 15 |
| [react-dom-core](packages/react-dom-core) | [![NPM version](https://img.shields.io/npm/v/react-dom-core.svg)](https://www.npmjs.com/package/react-dom-core) | Copy of `react-dom` 15 |
| [react-property](packages/react-property) | [![NPM version](https://img.shields.io/npm/v/react-property.svg)](https://www.npmjs.com/package/react-property) | HTML and SVG DOM properties |
<!-- prettier-ignore-end -->

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## Install

Clone repository:

```sh
git clone --recursive https://github.com/remarkablemark/react-dom-core.git
cd react-dom-core
```

Use Node.js version:

```sh
nvm use
```

Install dependencies:

```sh
npm install
```

Bootstrap packages:

```sh
npm run bootstrap
```

## Available Scripts

In the project directory, you can run:

### `npm run bootstrap`

Link local packages and install remaining package dependencies.

### `npm run build`

Build packages.

### `npm run changed`

List packages that have changed since last release.

### `npm run clean`

Delete `node_modules` from all packages.

### `npm run lint`

Run lint for all packages.

### `npm test`

Run test for all packages.

### `npm run release`

Release and publish packages.

## License

MIT
