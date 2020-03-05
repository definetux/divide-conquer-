import React, {  } from 'react'
import { UserListItem } from './UserListItem'

export const UserList = ({ users, onEdit, onRemove }) => {
  const userListItems = users.map(user => (
    <UserListItem
      key={user.id}
      user={user}
      editUser={onEdit}
      removeUser={onRemove}
    />
  ))

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th className="two wide">Name</th>
            <th className="two wide">Age</th>
            <th className="two wide">Job</th>
            <th className="two wide"></th>
          </tr>
        </thead>
        <tbody>
          {userListItems}
        </tbody>
      </table>
    </div>
  )
} 
