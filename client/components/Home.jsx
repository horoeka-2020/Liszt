import { Container } from '@material-ui/core'
import React from 'react'
import Books from './Books'

export class Home extends React.Component {


  render() {
    return (
      <section className="container">
        <div className="columns">
          <div className="column is-full">
            <button className="button button-center is-primary">Books</button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <button className="button button-center">Books</button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <button className="button button-center">Books</button>
          </div>
        </div>
      </section>
    )
  }
}


export default Home