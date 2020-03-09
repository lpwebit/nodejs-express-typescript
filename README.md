![ts-badge](https://img.shields.io/badge/TypeScript-3.8-blue.svg)
![nodejs-badge](https://img.shields.io/badge/Node.js->=%2012.13-blue.svg)
![license-badge](https://img.shields.io/badge/license-MIT-green.svg)

nodejs-express-typescript
===

Developer Ready: A simple and easy template. Works out of the box for most [Node.js][nodejs] projects.

All basic tools included and configured:

+ [TypeScript][typescript] [3.8][typescript-38]
+ [ESLint][eslint] with rules recommendation from airbnb
+ [MochaJS][mochajs] unit testing
+ [Istanbul][nyc] code coverage report
+ [Prettier][prettier] to enforce consistent code style
+ NPM [scripts](#available-scripts) for common operations
+ simple example of TypeScript code and unit test
+ .editorconfig for consistent file format
+ pre configured example for [Docker][docker]
+ Typescript [ioc][typescript-ioc] for dependency injection

## Getting Started

This project is ready to use with the latest Active LTS release of [Node.js][nodejs].

## Available Scripts

+ `clean` - remove coverage data and transpiled files,
+ `build` - transpile TypeScript to ES2017,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `start:dev` - start express server,
+ `dev` - run build:watch command and start:dev for automatic restart of your dev server,
+ `lint` - lint source files and tests,
+ `test` - run tests with mocha
+ `coverage` - run coverage report

## License
Licensed under the MIT. See the [LICENSE](https://gitlab.com/lpweb-template/nodejs-express-typescript/-/blob/master/LICENSE) file for details.

[nodejs]: https://nodejs.org/dist/latest-v13.x/docs/api/
[docker]: https://www.docker.com/
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[typescript-ioc]: https://www.npmjs.com/package/typescript-ioc
[mochajs]: https://mochajs.org/
[nyc]: https://istanbul.js.org/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[travis]: https://travis-ci.org