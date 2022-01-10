import { Route, Switch } from 'react-router-dom'

import Profile from './pages/Profile'
import Profiles from './layouts/Profiles'

function Routes() {
  return (
    <Switch>
      <RouteWrapper path='/' component={Profile} layout={Profiles} />
    </Switch>
  )
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default Routes
