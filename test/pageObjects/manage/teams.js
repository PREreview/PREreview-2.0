import config from 'config'
import ReactSelector from 'testcafe-react-selectors'

const manageTeams = {
  url: `${config.get('pubsweet-server.baseUrl')}/manage/teams`,

  title: ReactSelector('TeamManager').find('h2'),

  team: n => ReactSelector('Team').nth(n),
  teamTitle: n =>
    manageTeams
      .team(n)
      .find('td')
      .nth(1),
  teamDelete: n => manageTeams.team(n).find('button'),

  teamName: ReactSelector('TeamCreator FormControl'),
  teamType: ReactSelector('TeamCreator Select').nth(0),
  collection: ReactSelector('TeamCreator Select').nth(1),
  option: ReactSelector('TeamCreator Select Option'),
  create: ReactSelector('TeamCreator Button'),
}

export default manageTeams
