import React from 'react'
import PropTypes from 'prop-types'
import { withStateHandlers } from 'recompose'
import { compose } from 'lodash/fp'
import { Redirect } from 'react-router-dom'
import routes from 'routes'
import { Layout } from 'providers/MainLayout'

import CreateAccount from './components/CreateAccount'
import SignIn from './components/SignIn'
import ApiKey from './components/ApiKey'

export const Authentication = ({ authenticationState, showLogin, showCreate, showApikey, authComplete }) => (
  <Layout>
    {
      ({ Container, Content }) => (
        <Container header>
          <Content>
            { authenticationState === 'login' && <SignIn showCreate={showCreate} />}
            { authenticationState === 'create' && <CreateAccount showLogin={showLogin} showApikey={showApikey} />}
            { authenticationState === 'apiKey' && <ApiKey authComplete={authComplete} />}
            { authenticationState === 'loggedIn' && <Redirect to={routes.account.characters} />}
          </Content>
        </Container>
      )
    }
  </Layout>
)

Authentication.propTypes = {
  authenticationState: PropTypes.string,
  showLogin: PropTypes.func,
  showCreate: PropTypes.func,
  showApikey: PropTypes.func,
  authComplete: PropTypes.func
}

export default compose(
  withStateHandlers(
    () => ({
      authenticationState: 'login'
    }),
    {
      showLogin: () => () => ({ authenticationState: 'login' }),
      showCreate: () => () => ({ authenticationState: 'create' }),
      showApikey: () => () => ({ authenticationState: 'apiKey' }),
      authComplete: () => () => ({ authenticationState: 'loggedIn' })
    }
  )
)(Authentication)