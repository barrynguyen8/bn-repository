import React from 'react'
import Login from './components/Login'
import Healthaide from './components/Healthaide'

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <div className="App">
      <h1>HealthAide</h1>
      {currentUser() ? <Healthaide /> : <Login />}
    </div>
  );
}

export default App;
