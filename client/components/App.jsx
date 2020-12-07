import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import SignIn from './Signin'
import BookSearchBar from './BookSearchBar'
import BookList from './BookList'
import SearchResults from './SearchResults'

export class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header path='/' />
        <Route exact path='/' component={SignIn} />
        <Route exact path='/booksearch' component={BookSearchBar} />
        <Route exact path='/home' component={Home} />
        <Route path='/booklist' component={BookList} />
      </div>
    )
  }
}

export default App
