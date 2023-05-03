import React from 'react'
import { Route, Switch, Redirect, useParams, NavLink } from 'react-router-dom'
import UserListPage from './userListPage'
import User from './user'
import EditUser from './editUser'

function UsersLayout({ children }) {
  const { userId } = useParams()
  return (
    <>
      <h2>User Layout</h2>
      <NavLink to={'/'}>Home Page</NavLink>
      <Switch>
        <Route path={'/users/:userId/profile'} component={User} />
        <Route path={'/users/:userId/edit'} component={EditUser} />
        <Route exact path={'/users'} component={UserListPage} />
        <Redirect from="*" to={`/users/${userId}/profile`} />
      </Switch>
      {children}
    </>
  )
}

export default UsersLayout
