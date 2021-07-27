const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://gnio7v2k.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;