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

Pull Git submodule:

```sh
git submodule update --init --recursive
```

Use Node.js version:

```sh
nvm use
```

Install dependencies:

```sh
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds packages.

### `npm run changed`

Lists packages that have changed since last release.

### `npm run clean`

Deletes `node_modules` from packages and cleans build artifacts.

### `npm run lint`

Lints packages.

### `npm test`

Tests packages.

### `npm run release`

Releases and publishes packages.

## License

MIT
