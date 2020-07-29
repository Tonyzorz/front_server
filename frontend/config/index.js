'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/movies': {
      //   target: 'http://192.168.11.6:3000/movies',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/movies': ''
      //   }
      // },
      '/find': {
        target: 'http://192.168.11.6:18090/find',
        changeOrigin: true,
        pathRewrite: {
          '/find': ''
        }
      },
      '/propertyfind': {
        target: 'http://192.168.11.6:18090/propertyfind',
        changeOrigin: true,
        pathRewrite: {
          '/propertyfind': ''
        }
      },
      '/instancefind': {
        target: 'http://192.168.11.6:18090/instancefind',
        changeOrigin: true,
        pathRewrite: {
          '/instancefind': ''
        }
      },
      '/find/:id': {
        target: 'http://192.168.11.6:18090/find/:id',
        changeOrigin: true,
        pathRewrite: {
          '/find': ''
        }
      },
      '/propertyfind/:id': {
        target: 'http://192.168.11.6:18090/propertyfind/:id',
        changeOrigin: true,
        pathRewrite: {
          '/propertyfind': ''
        }
      },
      '/instancefind/:id': {
        target: 'http://192.168.11.6:18090/instancefind/:id',
        changeOrigin: true,
        pathRewrite: {
          '/instancefind': ''
        }
      },
      '/delete': {
        target: 'http://192.168.11.6:18090/delete/:id',
        changeOrigin: true,
        pathRewrite: {
          '^/delete': ''
        }
      },
      '/propertyDelete': {
        target: 'http://192.168.11.6:18090/propertyDelete/:id',
        changeOrigin: true,
        pathRewrite: {
          '^/propertyDelete': ''
        }
      },
      '/instanceDelete': {
        target: 'http://192.168.11.6:18090/instanceDelete/:id',
        changeOrigin: true,
        pathRewrite: {
          '^/instanceDelete': ''
        }
      },
      '/queryInsert': {
        target: 'http://192.168.11.6:18090/queryInsert',
        changeOrigin: true,
        pathRewrite: {
          '^/queryInsert': ''
        }
      },
      '/propertyInsert': {
        target: 'http://192.168.11.6:18090/propertyInsert',
        changeOrigin: true,
        pathRewrite: {
          '^/propertyInsert': ''
        }
      },
      '/instanceInsert': {
        target: 'http://192.168.11.6:18090/instanceInsert',
        changeOrigin: true,
        pathRewrite: {
          '^/instanceInsert': ''
        }
      },
      '/queryUpdate': {
        target: 'http://192.168.11.6:18090/queryUpdate',
        changeOrigin: true,
        pathRewrite: {
          '^/queryUpdate': ''
        }
      },
      '/propertyUpdate': {
        target: 'http://192.168.11.6:18090/propertyUpdate',
        changeOrigin: true,
        pathRewrite: {
          '^/propertyUpdate': ''
        }
      },
      '/instanceUpdate': {
        target: 'http://192.168.11.6:18090/instanceUpdate',
        changeOrigin: true,
        pathRewrite: {
          '^/instanceUpdate': ''
        }
      },
      '/headerData': {
        target: 'http://192.168.11.6:18090/headerData',
        changeOrigin: true,
        pathRewrite: {
          '^/headerData': ''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 5050, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
