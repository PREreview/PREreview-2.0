import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import { configureStore, Root } from 'pubsweet-client'

import theme from '@pubsweet/default-theme'

import createHistory from 'history/createBrowserHistory'
import routes from './routes'

const history = createHistory();
const store = configureStore(history, {});

const rootEl = document.getElementById('root');

theme.colorPrimary = '#FF3333';

ReactDOM.render(
  <Root history={history} routes={routes} store={store} theme={theme} />,
  rootEl,
)

export default hot(module)(Root)
