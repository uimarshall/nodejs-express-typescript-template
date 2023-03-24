# nodejs-express-typescript-template-

This repository is a template on how to setup node express and typescript for projects. This will enable you integrate TypeScript into your nodejs project.

The Principle
We write typescript code in a TypeScript file, then compile or transpile those typescript code into JavaScript and then take those Js file and serve them. Just like we serve files when calls are made to our APIs.

## Things to mention

How I resolved the [Cannot find module error](https://bobbyhadz.com/blog/javascript-cannot-find-module-loader-js)

It happens that the main file in package.json was pointing to `index.js` instead of "main": "`dist/index.js`",
