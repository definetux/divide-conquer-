const baseUrl = 'http://localhost:5000'

const makeRequest = (url, config) => fetch(url, config).then(response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
})

export const get = url => makeRequest(`${baseUrl}/${url}`)

export const post = (url, body) => makeRequest(`${baseUrl}/${url}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body)
})

export const del = url => makeRequest(`${baseUrl}/${url}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  }
})
