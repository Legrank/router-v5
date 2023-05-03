import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function EditUser() {
  const { userId } = useParams()
  return (
    <>
      <h2>EditUser</h2>
      <ul>
        <li>
          <NavLink to={'profile'}>User Page</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${Number(userId) + 1}/profile`}>
            another user page
          </NavLink>
        </li>
        <li>
          <NavLink to={'/users'}>User list page</NavLink>
        </li>
      </ul>
    </>
  )
}

export default EditUser
