# react-dom-core

[![build](https://github.com/remarkablemark/react-dom-core/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/react-dom-core/actions/workflows/build.yml)

A monorepo containing the following packages:

- [react-15](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-15)
- [react-dom-core](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-dom-core)
- [react-property](https://github.com/remarkablemark/react-dom-core/tree/master/packages/react-property)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Install

Clone repository:

```sh
git clone --recursive https://github.com/remarkablemark/react-dom-core.git && cd react-dom-core
```

Install dependencies and bootstrap packages:

```sh
npm install
npm run bootstrap
```

## Scripts

Link local packages and install remaining package dependencies:

```sh
npm run bootstrap
```

Build packages:

```sh
npm run build
```

List packages that have changed since last release:

```sh
npm run changed
```

Delete `node_modules` from all packages:

```sh
npm run clean
```

Run lint for all packages:

```sh
npm run lint
```

Run test for all packages:

```sh
npm test
```

Release and publish packages:

```sh
npm run release
```

## License

MIT
