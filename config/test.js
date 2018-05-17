const logger = require('winston')
const { deferConfig } = require('config/defer')

module.exports = {
  'pubsweet-server': {
    db: { database: 'test' },
    logger,
    port: 4000,
    baseUrl: deferConfig(
      cfg => `http://localhost:${cfg['pubsweet-server'].port}`,
    ),
    secret: 'test',
  },
  mailer: {
    transport: {
      sendmail: false,
      port: 1025,
      auth: {
        user: 'user',
        pass: 'pass',
      },
    },
  },
  'password-reset': {
    url: 'http://localhost:4000/password-reset',
  },
}
