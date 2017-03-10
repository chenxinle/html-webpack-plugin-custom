function htmlWebpackPluginCustom(options) {
  this.options = options;
}

htmlWebpackPluginCustom.prototype.apply = function(compiler) {
    var js = this.options.js;
    var css = this.options.css;
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            for (var i = js.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(js[i]);
            }
            for (var i = css.length - 1; i >= 0; i--) {
              htmlPluginData.assets.css.unshift(css[i]);
            }
            callback(null, htmlPluginData);
        });
    });
};
