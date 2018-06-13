import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Login from './Login';

class App extends Component {
  state = {
    user: {
      uid: '',
      userName: 'maggie',
    },
  }

  render() {
    let loggedIn = true

    if(this.state.user.userName == ''){
      loggedIn = false
    }
    return (
      <div className="App">
        {loggedIn ? <Main user={this.state.user} /> : <Login />}
      </div>
    )
  }
}

export default App