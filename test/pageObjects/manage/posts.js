import config from 'config'
import ReactSelector from 'testcafe-react-selectors'

const managePosts = {
  url: `${config.get('pubsweet-server.baseUrl')}/manage/posts`,

  title: ReactSelector('PostsManager').find('h2'),

  post: n => ReactSelector('Post').nth(n),
  postTitle: n => managePosts.post(n).find('label'),
  postEdit: n => managePosts.post(n).find('button[title=Edit]'),
  postPublish: n => managePosts.post(n).find('button[title=Publish]'),
  postUnpublish: n => managePosts.post(n).find('button[title=Unpublish]'),
  postDelete: n => managePosts.post(n).find('button[title=Delete]'),

  newPostInput: ReactSelector('PostCreator FormControl'),
  newPostButton: ReactSelector('PostCreator Button'),
}

export default managePosts
