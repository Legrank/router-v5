import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import HomePage from './homePage'
import UsersLayout from './usersLayout'

function App() {
  return (
    <div className="App">
      <h2>App Layout</h2>
      <NavLink to={'/users'}>User List Page</NavLink>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:userId?" component={UsersLayout} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  )
}

export default App
