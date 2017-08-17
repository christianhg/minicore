# minicore

The goal of this repository is to figure out how to build an app with webpack that has the following proporties:

* There exists a common core.
* There exists a number of plugins that all can import functionality from the core.
* The plugins can also import functionality from each other.
* The core resides in `./src/core` and the plugins reside in `./src/plugins/**`.
* The core and each plugin should be outputted as its own bundle with no duplication, i.e. their bundle should only inlide their own code.

```
src
├── core
│   ├── compute
│   └── curry
└── plugins
    ├── add (imports from core)
    ├── bar (imports from foo)
    ├── foo (imports from core as well as add and subtract)
    └── subtract (imports from core)
```

* The naive, plain solution is in `webpack.config.naive.js`.
* The desired solution is in `webpack.config.commons.js`.

## Useful commands:

Distribute and analyse the compact version of the naive build:

```
npm run analyse-naive-compact
```

Distribute and analyse the compact version of the desired build:

```
npm run analyse-commons-compact
```

## Useful links

* [Bundle Buddy 🔧](https://github.com/samccone/bundle-buddy)
* [Totally Tooling Tips: Webpack Tips 🎥](https://www.youtube.com/watch?v=zFoBYfMLUCM)
* [Vendor and code splitting in webpack 2 📖](https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923)
* [webpack bits: Getting the most out of the CommonsChunkPlugin() 📖](https://medium.com/webpack/webpack-bits-getting-the-most-out-of-the-commonschunkplugin-ab389e5f318)
* [webpack for real tasks: decreasing front-end size and improving caching 📖](https://iamakulov.com/notes/webpack-front-end-size-caching/?utm_campaign=chrome_series_webpackrealtasks_081117)
