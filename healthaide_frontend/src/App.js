import React from 'react'
import Login from './components/Login'
import Healthaide from './components/Healthaide'
import AppHeader from './components/AppHeader'

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      {currentUser() ? <Healthaide /> : <Login />}
    </div>
  );
}

export default App;
