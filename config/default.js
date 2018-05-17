const path = require('path')
const logger = require('winston')
const components = require('./components.json')

module.exports = {
  'pubsweet-server': {
    db: {},
    logger,
    port: 3000,
    uploads: 'uploads',
  },
  'pubsweet-client': {
    API_ENDPOINT: '/api',
    theme: 'PepperTheme',
    'login-redirect': '/manage/posts',
    'redux-log': true,
  },
  authsome: {
    // this should be either an npm package or an absolute path, not a relative path
    mode: 'authsome/src/modes/blog',
    teams: {
      teamContributors: {
        name: 'Contributors',
        permissions: 'POST',
      },
      teamCoauthors: {
        name: 'Coauthors',
        permissions: 'PATCH',
      },
    },
  },
  pubsweet: {
    components,
  },
  'password-reset': {
    url: 'http://localhost:3000/password-reset',
    sender: 'noreply@pubsweet.org',
  },
  mailer: {
    from: 'nobody@example.com',
    transport: {
      sendmail: true,
    },
  },
  validations: path.join(__dirname, 'validations'),
  publicKeys: ['pubsweet-client', 'authsome', 'pubsweet', 'validations'],
}
