const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'htpp://localhost:8080/',
    secure: false,
    loglevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
