#!/usr/bin/env node

const logger = require('@pubsweet/logger')
const { addCollection } = require('@pubsweet/db-manager')

const [, , title] = process.argv

if (!title) {
  logger.error(
    `Please specify a title, e.g. npm run create:collection -- "Some title"`,
  )
  process.exit()
}

addCollection({ title }).catch(err => logger.error(err))
