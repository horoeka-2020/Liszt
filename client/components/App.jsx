import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import BookList from './BookList'
import FilmList from './films/FilmList'

export class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Header path='/' />
        <Route exact path='/' component={Home} />
        <Route path='/booklist' component={BookList} />
        <Route path='/filmlist' component={FilmList} />
      </div>
    )
  }
}

export default App
