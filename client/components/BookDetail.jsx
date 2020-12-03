import { Book } from '@material-ui/icons'
import React from 'react'

const BookDetail = (props) => {
 const book = props.book

    return (
      <div>
        <img src={book.image_url}></img>
    <p>{book.title}</p>
    <p>{book.author}</p>
    <p>{book.description}</p>
    <p>{book.published_date}</p>
      </div>
    )
  }


export default BookDetail