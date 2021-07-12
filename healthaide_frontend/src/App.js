import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import AppHeader from './components/AppHeader'
import Healthaide from './components/Healthaide'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


function App() {
  const currentUser = localStorage.getItem('user')
  return (
    <Router>
      <Route path="/">
        <AppHeader />
      </Route>
      <Route exact path="/">
        <Healthaide/>
      </Route>
      <Route exact path="/login">
        {currentUser ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/signup">
        {currentUser ? <Redirect to="/" /> : <Signup />}
      </Route>
    </Router>
  )
}

export default App;
