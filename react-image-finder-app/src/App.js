import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Faq from './components/faq/Faq'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div style={{ padding: '30px' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App;


