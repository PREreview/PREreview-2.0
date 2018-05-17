import React from 'react'
import PropTypes from 'prop-types'

import AuthenticatedComponent from 'pubsweet-client/src/components/AuthenticatedComponent'
import Navigation from '../Navigation/Navigation'

const AuthenticatedManage = ({ children, ...props }) => (
  <div>
    <Navigation />
    <AuthenticatedComponent
      operation="GET"
      selector={state => state.collections[0]}
      unauthorized={<p>You are not authorized to view this page.</p>}
      {...props}
    >
      {children}
    </AuthenticatedComponent>
  </div>
)

AuthenticatedManage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthenticatedManage
