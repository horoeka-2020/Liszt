import React from 'react'
import BookDetail from './BookDetail'
const SearchResults = (props) => {
  return (
    <div>
      {props.result.map((book) => (
        <BookDetail
          key={book.volumeInfo.title}
          title={book.volumeInfo.title}
          image={
            book.volumeInfo.imageLinks === undefined
              ? ''
              : book.volumeInfo.imageLinks.thumbnail
          }
          author={
            book.volumeInfo.authors === undefined
              ? ''
              : book.volumeInfo.authors[0]
          }
          description={book.volumeInfo.description}
          isbn={
            book.volumeInfo.industryIdentifiers[0] === undefined
              ? ''
              : book.volumeInfo.industryIdentifiers[0].identifier
          }
          history={props.history}
        />
      ))}
    </div>
  )
}

export default SearchResults
