import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Manage
import PostsManager from 'pubsweet-component-posts-manager/PostsManagerContainer'
import UsersManager from 'pubsweet-component-users-manager/UsersManagerContainer'

// Editor
import MediumDraft from 'pubsweet-component-medium-draft/MediumDraftContainer'

// Public
import Blog from 'pubsweet-component-blog/BlogContainer'
import HTML from 'pubsweet-component-html/HTMLContainer'

// Authentication
import Login from 'pubsweet-component-login/LoginContainer'
import Signup from 'pubsweet-component-signup/SignupContainer'
import PasswordReset from 'pubsweet-component-password-reset-frontend/PasswordReset'

import AuthenticatedManage from './components/AuthenticatedManage/AuthenticatedManage'

import Home from './components/Home/Home'

const Managed = () => (
  <AuthenticatedManage>
    <Switch>
      <Route component={PostsManager} path="/manage/posts" />
      <Route component={UsersManager} path="/manage/users" />
      <Route component={MediumDraft} path="/manage/sciencewriter/:id" />
    </Switch>
  </AuthenticatedManage>
)

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Managed} path="/manage" />
    <Route component={Login} path="/login" />
    <Route component={Signup} path="/signup" />
    <Route component={PasswordReset} path="/password-reset" />
    <Route component={HTML} path="/:id" />
  </Switch>
)
