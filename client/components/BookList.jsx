import React from 'react'

import Carousel from './Carousel'
import BooksApi from './BooksApi'

export class BookList extends React.Component {
  render() {
    return (
      <div>
        <BooksApi />
        <Carousel />
      </div>
    )
  }
}

export default BookList
