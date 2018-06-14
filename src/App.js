import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Login from './Login';

class App extends Component {
  state = {
    user: {},
  }
    componentWillMount(){
      const user = JSON.parse(localStorage.getItem(''))
      if (user) {
        this.setState({ user })
    }
  }
  handleAuth = (user) => {
    this.setState({user})
    localStorage.setItem('user', JSON.stringify(user))
  }
  signedIn= () => {
    return this.state.user.uid
  }
  signOut = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  render() {
    return (
      <div className="App">
      {
        this.signedIn()
      ?<Main user={this.state.user} />
      :<Login Login={this.handleAuth}/>
        }
      </div>
    )
  }
}

export default App