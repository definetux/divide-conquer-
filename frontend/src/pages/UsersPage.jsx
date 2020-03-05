import React, { useState, useEffect } from 'react'
import { UserList } from './containers/UserList'
import { Header } from './containers/Header'
import { loadUsers, removeUser, saveUser } from '../services/user.mock'
import { toast } from 'react-toastify'
import Modal from 'react-modal';
import { AddEditUser } from './containers/AddEditUser'

const modalStyles = {
  content : {
    top : '7em',
    left: '20%',
    right: '20%',
    bottom: 'auto'
  }
}

const userList = {
  marginTop: '7em'
}

export const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [showModal, setModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState()

  useEffect(() => {
    loadUsers()
      .then(setUsers)
      .catch(() => toast.error("No users found"))
  }, [])

  const onRemoveUser = user => removeUser(user)
    .then(setUsers)
    .catch(() => toast.error('Can not remove user!'))

  const onEditUser = user => {
    setModal(true)
    setSelectedUser(user)
  }

  const onSaved = user => {
    setModal(false)
    setSelectedUser(undefined)
    saveUser({
      id: parseInt(user.id),
      name: user.name,
      age: parseInt(user.age),
      job: user.job
    }).then(setUsers).catch(() => toast.error('Can not save user!'))
  }

  const onAddUser = () => {
    setModal(true)
    setSelectedUser(undefined)
  }

  const onCloseModal = () => setModal(false)

  return (
    <div>
      <Header />
      <div className="ui main text container" style={userList}>
        <div className="ui clearing">
          <h1 className="ui left floated header">Users</h1>
          <button className="ui right floated primary button" onClick={onAddUser}>Add</button>
        </div>
        <UserList
          users={users}
          onEdit={onEditUser}
          onRemove={onRemoveUser}
        />
      </div>
      <Modal 
        isOpen={showModal}
        style={modalStyles}
        contentLabel="Minimal Modal Example"
      >
      <AddEditUser
        user={selectedUser}
        onSave={onSaved}
        onClose={onCloseModal}
      />
      </Modal>
    </div>
  )
}
