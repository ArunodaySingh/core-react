import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router'
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import process from 'nprogress'
import App from './functions/App'

render((
  <Router onUpdate={() => {
    process.done()
    window.scrollTo(0, 0)
  }} history={browserHistory}>
    <Route
      path="/"
      onEnter={() => process.start()}
      onChange={() => process.start()}
      component={App}
    >
      <IndexRoute getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Home').default)
        })
      }} />
      <Route path="guide" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Guide').default)
        })
      }} />
      <Route path="components" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Components').default)
        })
      }}>
        <IndexRedirect to="/components/Button" />
        <Route path=":component" getComponent={(nextState, cb) => {
          const component = nextState.location.pathname.split('/').pop()
          require.ensure([], require => {
            cb(null, require(`./functions/Components/docs/${component}.doc`).default)
          })
        }} />
      </Route>
      <Route path="Changelog" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Changelog').default)
        })
      }} />
      {/* <Route path="scaffolding" getComponent={(nextState, cb) => { */}
      {/* require.ensure([], require => { */}
      {/* cb(null, require('./functions/Scaffolding').default) */}
      {/* }) */}
      {/* }}> */}
      {/* <IndexRoute getComponent={(nextState, cb) => { */}
      {/* require.ensure([], require => { */}
      {/* cb(null, require('./functions/Scaffolding/Home').default) */}
      {/* }) */}
      {/* }} /> */}
      {/* <Route path="workflow" getComponent={(nextState, cb) => { */}
      {/* require.ensure([], require => { */}
      {/* cb(null, require('./functions/Scaffolding/Workflow').default) */}
      {/* }) */}
      {/* }} /> */}
      {/* <Route path="docs" getComponent={(nextState, cb) => { */}
      {/* require.ensure([], require => { */}
      {/* cb(null, require('./functions/Scaffolding/Docs').default) */}
      {/* }) */}
      {/* }} /> */}
      {/* <Route path="changelog" getComponent={(nextState, cb) => { */}
      {/* require.ensure([], require => { */}
      {/* cb(null, require('./functions/Scaffolding/Changelog').default) */}
      {/* }) */}
      {/* }} /> */}
      {/* </Route> */}
      <Route path="*" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/NotFound').default)
        })
      }} />
    </Route>
  </Router>
), document.getElementById('app'))
