# react-dom-core

[![build](https://github.com/remarkablemark/react-dom-core/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/react-dom-core/actions/workflows/build.yml)

A monorepo containing the following packages:

- [react-15](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-15)
- [react-dom-core](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-dom-core)
- [react-property](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-property)

## Prerequisites

[nvm](https://github.com/nvm-sh/nvm):

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

## Install

Clone repository:

```sh
git clone --recursive https://github.com/remarkablemark/react-dom-core.git && cd react-dom-core
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
