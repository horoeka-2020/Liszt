import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import SignIn from './Signin'
import BooksApi from './BooksApi'

export class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header path='/' />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/searchbookapi' component={BooksApi} />
        <Route exact path='/home' component={Home} />
      </div>
    )
  }
}

export default App
