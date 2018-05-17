import faker from 'faker'
import config from 'config'

import { startServer, setup } from './helpers/setup'
import mailHelper from './helpers/mail'
import {
  login,
  managePosts,
  manageTeams,
  manageUsers,
  passwordReset,
} from './pageObjects'

let admin
let collection

fixture('Admin user')
  .before(startServer)
  .beforeEach(async () => {
    const result = await setup()
    admin = result.userData
    collection = result.collectionData
  })

test('Manage posts journey', async t => {
  await login
    .doLogin(admin.username, admin.password)
    .expect(managePosts.title.innerText)
    .eql(collection.title)

  // create a post
  const postTitle = faker.lorem.words()
  await t
    .typeText(managePosts.newPostInput, postTitle)
    .click(managePosts.newPostButton)
    .expect(managePosts.postTitle(0).innerText)
    .eql(postTitle)

  // publish it
  await t
    .click(managePosts.postPublish(0))
    .expect(managePosts.postPublish(0).exists)
    .notOk()
    .expect(managePosts.postUnpublish(0).exists)
    .ok()

  // delete it
  await t
    .click(managePosts.postDelete(0))
    .expect(managePosts.post(0).exists)
    .notOk()
})

test('Manage teams journey', async t => {
  await login
    .doLogin(admin.username, admin.password)
    .navigateTo(manageTeams.url)

  // create a team
  const teamName = faker.lorem.words()
  await t
    .typeText(manageTeams.teamName, teamName)
    .click(manageTeams.teamType)
    .click(manageTeams.option)
    .click(manageTeams.collection)
    .click(manageTeams.option)
    .click(manageTeams.create)
    .expect(manageTeams.teamTitle(0).innerText)
    .eql(teamName)

  // delete it
  await t
    .click(manageTeams.teamDelete(0))
    // TODO remove reload workaround once reducer bug fix is published
    // https://gitlab.coko.foundation/pubsweet/pubsweet-client/merge_requests/127
    .navigateTo(manageTeams.url)
    .expect(manageTeams.team(0).exists)
    .notOk()
})

test('Manage users journey', async t => {
  await login
    .doLogin(admin.username, admin.password)
    .navigateTo(manageUsers.url)

  // check user is shown
  await t.expect(manageUsers.userTitle(0).innerText).eql(admin.username)
})

test('Password reset journey', async t => {
  // start mail server
  mailHelper.start()

  // request password reset email
  await t
    .navigateTo(passwordReset.url)
    .typeText(passwordReset.username, admin.username)
    .click(passwordReset.submit)
    .expect(passwordReset.alert.innerText)
    .contains('email has been sent')

  // extract reset URL from email content
  const mail = await mailHelper.nextEmail()

  const matchResult = mail
    .replace(/=3D/g, '=')
    .replace(/=\r?\n/g, '')
    .match(new RegExp(`${config.get('pubsweet-server.baseUrl')}\\S+`))
  if (!matchResult) throw new Error('URL not found in email')

  // set new password
  const newPass = faker.internet.password()
  await t
    .navigateTo(matchResult[0])
    .typeText(passwordReset.password, newPass)
    .click(passwordReset.submit)

  // login
  await login
    .doLogin(admin.username, newPass)
    .expect(managePosts.title.innerText)
    .eql(collection.title)
})
