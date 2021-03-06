# react-dom-core

[![Build Status](https://travis-ci.org/remarkablemark/react-dom-core.svg?branch=master)](https://travis-ci.org/remarkablemark/react-dom-core.svg)

A monorepo containing the following packages:

- [react-15](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-15)
- [react-dom-core](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-dom-core)
- [react-property](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-property)

## Prerequisites

- [Node.js 8+](https://nodejs.org/en/download/)
- [npm 5.3+](https://www.npmjs.com/get-npm)

## Install

Clone repository:

```sh
$ git clone https://github.com/remarkablemark/react-dom-core.git
$ cd react-dom-core
```

Install dependencies and bootstrap packages:

```sh
$ npm install
$ npm run bootstrap
```

## Scripts

Link local packages and install remaining package dependencies:

```sh
$ npm run bootstrap
```

Build packages:

```sh
$ npm run build
```

List packages that have changed since last release:

```sh
$ npm run changed
```

Remove `node_modules` from all packages:

```sh
$ npm run clean
```

Lint packages:

```sh
$ npm run lint
```

Run tests for packages:

```sh
$ npm test
```

Release and publish packages:

```sh
$ npm run release
```

## License

MIT
