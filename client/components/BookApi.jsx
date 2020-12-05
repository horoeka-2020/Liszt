import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function BookApi(props) {
  const [book, setBook] = useState('')
  const [apiKey, setApiKey] = useState(
    'AIzaSyCnNZoJRVKldJLWrQ4A5DFRBtRud30H4jw'
  )

  function handleChange(e) {
    const book = e.target.value

    setBook(book)
  }
  //ISBN:
  //https://www.googleapis.com/books/v1/volumes?q=isbn:9781448823734&maxResults=1

  //ID:
  //https://www.googleapis.com/books/v1/volumes?q=id:gx4O4kpbCd8C&maxResults=1

  function handleSubmit(e) {
    e.preventDefault()

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=10`
      )
      .then((data) => {
        props.setResult(data.data.items)
        console.log(data.data.items)
        props.history.push('/booklist/searchresults')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          className='searchbar'
          placeholder='Search for books'
          autoComplete='off'
        />
        <button type='submit' className=''>
          Submit
        </button>
      </form>
    </>
  )
}
