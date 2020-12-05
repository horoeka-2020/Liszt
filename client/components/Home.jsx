import { Container } from '@material-ui/core'
import React from 'react'
import BookList from './BookList'
import { Link } from 'react-router-dom'

export class Home extends React.Component {
  render() {
    return (
      <section className='container'>
        <div className='columns'>
          <div className='column is-full'>
            <Link to='/booklist'>
              <button className='button button-center is-primary'>Books</button>
            </Link>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-full'>
            <button className='button button-center'>Music</button>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-full'>
            <button className='button button-center'>Movies</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
