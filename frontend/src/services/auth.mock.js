export const authenticate = (login) => new Promise((resolve, reject) => {
  if (login.includes('admin')) {
    resolve()
  } else {
    reject()
  }
})
