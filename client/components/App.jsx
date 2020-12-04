import React from 'react'

import Header from './Header'
import Home from './Home'
import SignIn from './Signin'



export class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Header/>
        <SignIn/>
      <Home/>
      </div>
    )
  }
}


export default App
