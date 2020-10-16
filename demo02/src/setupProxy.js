const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/_api",
    proxy.createProxyMiddleware({
      target: "https://c.m.163.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/_api": "",
      },
    })
  );
};
