# html-webpack-plugin-custom
a webpack plugin to insert custom js and css to html

Getting Started
```
  npm install --save-dev @chenxinle/html-webpack-plugin-custom 
```
USAGE
```
  var htmlWebpackPluginCustom = require('@chenxinle/html-webpack-plugin-custom')

  var webpackConfig = {   
    plugins: [   
      new htmlWebpackPluginCustom({   
        js: [   
          // put all the js you want insert into the html, each array item is the script src   
          // example: build_config.cdnHost + 'font-awesome/js/font-awesome.js'   
        ],   
        css: [   
           // put all the css you want insert into the html, each array item is the link src   
          // example: build_config.cdnHost + 'font-awesome/css/font-awesome.css'   
        ]   
      }),   
    ]   
  }
```
