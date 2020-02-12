const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://apiko-marketplace-api-2019.herokuapp.com',
      pathRewrite: {
          '^/api': ''
      },
      changeOrigin: true,
    })
  );
};