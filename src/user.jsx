import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams()
  return (
    <>
      <h2>User Page</h2>
      <ul>
        <li>
          <NavLink to={'edit'}>Edit Page</NavLink>
        </li>
        <li>
          <NavLink to={'/users'}>User list page</NavLink>
        </li>
      </ul>
      <p>User: {userId}</p>
    </>
  )
}

export default User
