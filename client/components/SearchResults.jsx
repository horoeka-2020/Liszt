import React from 'react'
import BookDetail from './BookDetail'
const SearchResults = (props) => {
  return (
    <div>
      {props.result.map((book) => (
        <BookDetail
          key={book.id}
          alt={book.volumeInfo.title}
          image={book.volumeInfo.imageLinks.thumbnail}
          author={book.volumeInfo.authors[0]}
          description={book.volumeInfo.description}
          // resetResults={props.resetResults}
          history={props.history}
        />
      ))}
    </div>
  )
}

export default SearchResults
