import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import BookSearch from './BookSearch'



export class SearchBar extends React.Component {

  render() {
    return (
      <div>
      <input
      type="text"
      placeholder="categories"/>
      {/*  onChange={this.handleChange}/> */}

    <Button variant="contained"size="large">Search</Button>
    <BookSearch/>
  
      {/* // onClick={() => this.props.dispatch(fetchPosts(`${this.state.category}`))}>Search</button> */}
  </div>
    )
    }
  }

  export default SearchBar