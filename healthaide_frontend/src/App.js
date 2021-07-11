import React from 'react'
import Login from './components/Login'
import Healthaide from './components/Healthaide'
import AppHeader from './components/AppHeader'
import Signup from './components/Signup'

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      {currentUser() ? 
        <Healthaide /> : 
        <><Login /> <Signup /></>}
    </div>
  )
}

export default App;
