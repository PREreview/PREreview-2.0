import config from 'config'
import ReactSelector from 'testcafe-react-selectors'

const manageUsers = {
  url: `${config.get('pubsweet-server.baseUrl')}/manage/users`,

  title: ReactSelector('UserManager').find('h2'),

  user: n => ReactSelector('User').nth(n),
  userTitle: n =>
    manageUsers
      .user(n)
      .find('td')
      .nth(1),
}

export default manageUsers
