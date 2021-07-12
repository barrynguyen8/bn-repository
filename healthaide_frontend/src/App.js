import React from 'react'
import Login from './components/Login'
import Healthaide from './components/Healthaide'
import AppHeader from './components/AppHeader'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route } from "react-router-dom"

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <Router>
      <Route path="/">
        <AppHeader />
      </Route>
      <Route exact path="/">
        <Healthaide />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Router>
  )
}


export default App;
