import { Container } from '@material-ui/core'
import React from 'react'
import BookList from './BookList'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
  render() {
    return (
      <section className='container body'>
        <div className='columns'>
          <div className='column is-full'>
            <Link to='/booklist'>
              <button className='button button-size button-center button-font button-style is-rounded'>BOOKS</button>
            </Link>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-full'>
            <button className='button button-size button-center button-font button-style is-rounded'>MUSIC</button>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-full'>
            <button className='button button-size button-center button-font button-style is-rounded'>FILM</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Home