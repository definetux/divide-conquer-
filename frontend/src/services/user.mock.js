let users = [{
    id: 1,
    name: 'James',
    age: 24,
    job: 'engineer'
  }, {
    id: 2,
    name: 'Jane',
    age: 23,
    job: 'engineer'
  }, {
    id: 3,
    name: 'Steve',
    age: 26,
    job: 'designer'
  }, {
    id: 4,
    name: 'Robert',
    age: 30,
    job: 'architect'
  }]

let currentId = 4

export const loadUsers = () => Promise.resolve(users)

export const removeUser = user => {
  users = users.filter(u => u.id !== user.id)
  return Promise.resolve(users)
}

export const saveUser = user => {
  if (user.id) {
    users = users.map(u => u.id === user.id ? ({ ...user }) : u)
  } else {
    users = [...users, { ...user, id: ++currentId }]
  }
  return Promise.resolve(users)
}
