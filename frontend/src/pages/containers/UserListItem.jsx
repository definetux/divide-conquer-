import React from 'react'

export const UserListItem = ({ user, editUser, removeUser }) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.age}</td>
    <td>{user.job}</td>
    <td className="right aligned">
      <button className="ui orange tiny button" onClick={() => editUser(user)}>Edit</button>
      <button className="ui secondary tiny button" onClick={() => removeUser(user)}>Remove</button>
    </td>
  </tr>
)
