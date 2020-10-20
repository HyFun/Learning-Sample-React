const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/_api",
    proxy.createProxyMiddleware({
      target: "http://localhost:8080/",
      changeOrigin: true,
      pathRewrite: {
        "^/_api": "",
      },
    })
  );
};
