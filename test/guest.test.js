import faker from 'faker'
import { login, signup, managePosts } from './pageObjects'
import { startServer, setup } from './helpers/setup'

fixture('Guest user')
  .before(startServer)
  .beforeEach(async () => {
    await setup()
  })

test('Signup journey', async t => {
  const user = {
    username: faker.internet.domainWord(),
    email: faker.internet.exampleEmail(),
    password: faker.internet.password(),
  }

  // cannot log in
  await login
    .doLogin(user.username, user.password)
    .expect(login.alert.innerText)
    .contains('Unauthorized')

  // signup
  await t
    .click(login.signUp)
    .expect(signup.title.innerText)
    .contains('Sign up')
    .typeText(signup.username, user.username)
    .typeText(signup.email, user.email)
    .typeText(signup.password, user.password)
    .click(signup.submit)

  // can log in
  await login
    .doLogin(user.username, user.password)
    .expect(t.eval(() => window.location.href))
    .eql(managePosts.url)
})
