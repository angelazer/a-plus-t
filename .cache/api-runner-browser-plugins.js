module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"a-plus-t-wedding","short_name":"wedding","start_url":"/","background_color":"#05878a","theme_color":"#05878a","display":"minimal-ui","icon":"src/images/heartInfinity.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"d8b53742ab82afbbd48b8ce0554b6300"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
