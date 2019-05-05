module.exports = function override(config, env) {
     // Preprocess our own .css files
    // This is the place to add your own loaders (e.g. sass/less etc.)
    // for a list of loaders, see https://webpack.js.org/loaders/#styling
    const cssLoader = {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      };
    config.module.rules.push(cssLoader);

    return config;
};