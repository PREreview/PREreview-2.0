import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Authorize from 'pubsweet-client/src/helpers/Authorize'
import actions from 'pubsweet-client/src/actions'
import { AppBar } from '@pubsweet/ui'

const Navigation = ({ logoutUser, currentUser }) => (
  <AppBar
    brand={<img alt="pubsweet" src="/assets/pubsweet.jpg" />}
    navLinks={
      <div>
        <NavLink to="/manage/posts">Posts</NavLink>
        <Authorize object={{ path: '/users' }} operation="GET">
          <NavLink to="/manage/users">Users</NavLink>
        </Authorize>
        <Authorize object={{ path: '/teams' }} operation="GET">
          <NavLink to="/manage/teams">Teams</NavLink>
        </Authorize>
      </div>
    }
    onLogoutClick={logoutUser}
    user={currentUser}
  />
)

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    admin: PropTypes.bool,
  }),
}

export default connect(
  state => ({
    currentUser: state.currentUser.user,
  }),
  { logoutUser: actions.logoutUser },
)(Navigation)
