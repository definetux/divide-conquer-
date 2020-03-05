import React from 'react'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { UsersPage } from './pages/UsersPage'
import { AboutPage } from './pages/AboutPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT,
})

export const App = () => (
  <Router>
    <Switch>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  </Router>
)
