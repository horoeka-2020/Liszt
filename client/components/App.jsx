import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import SignIn from './Signin'
import GoogleBooksApiSearch from './GoogleBooksApiSearch'

export class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Route path='/' component={Header} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/home' component={Home} />

        {/* <GoogleBooksApiSearch /> */}
      </div>
    )
  }
}

export default App
