import { get, del, post } from './api'

export const loadUsers = () => get('user')

export const removeUser = user => del(`user/${user.id}`)

export const saveUser = user => post('user', user)
