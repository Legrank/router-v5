import React from 'react'
import { NavLink } from 'react-router-dom'

const users = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

function UserListPage() {
  return (
    <>
      <h2>User list page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`users/${user.id}/profile`}>User: {user.id}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserListPage
