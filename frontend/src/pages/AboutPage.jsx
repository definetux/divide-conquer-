import React from 'react'
import { Header } from './containers/Header'

const title = {
  marginTop: '7em'
}

export const AboutPage = () => (
  <div>
    <Header></Header>
    <div className="ui main text container" style={title}>
      <h1 className="ui header">React is really cool</h1>
    </div>
  </div>
)
