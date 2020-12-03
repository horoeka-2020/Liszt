import React from 'react'

import Header from './Header'
import Home from './Home'
import SignIn from './Signin'



export class App extends React.Component {

  render() {
    return (
      <div className='app'>
        {/* <SignIn/> */}
        <Header/>
      <Home/>
      </div>
    )
  }
}


export default App
