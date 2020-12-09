import React from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import BookCard from './BookCard'
import { getBookList } from '../apis/books'

class BookLibrary extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    getBookList(8).then((books) =>
      this.setState({
        books: books.books
      })
    )
  }

  refreshList = (books) => {
    this.setState({
      books: books
    })
  }

  render() {
    return (
      <div>
        {this.state.books.map((book) => {
          return (
            <BookCard
              author={book.author}
              title={book.title}
              image={book.imageUrl}
              isbn={book.bookApiId}
              refreshList={this.refreshList}
              key={book.bookApiId}
            />
          )
        })}
      </div>
    )
  }
}

export default BookLibrary
