import React, { useState } from 'react'
import { UserList } from './containers/UserList'
import { Header } from './containers/Header'
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

  const onRemoveUser = user => {}

  const onEditUser = user => {
    setModal(true)
  }

  const onSaved = user => {
    setModal(false)
  }

  const onAddUser = () => {
    setModal(true)
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
