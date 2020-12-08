import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'

import axios from 'axios'

export default function FilmSearchBar (props) {
  const [film, setFilm] = useState('')
  const [apiKey, setApiKey] = useState('39cd8914')

  function handleChange (e) {
    const film = e.target.value
    setFilm(film)
  }

  function handleSubmit (e) {
    e.preventDefault()

    axios
      .get(`http://www.omdbapi.com/?s=${film}&apikey=${apiKey}`)
      .then((data) => {
        console.log(data.data.Search)
        props.setResult(data.data.Search)
        props.history.push('/filmlist/searchresults')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <form className='search-bar' style={{ borderColor: '#2652ff' }} onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          className='searchbar search-font'
          placeholder='Search for movies'
          autoComplete='off'
          style={{ color: '#2652ff' }}
        />
        <IconButton type='submit'>
          {' '}
          <SearchIcon style={{ color: '#2652ff' }} />
        </IconButton>
      </form>
    </>
  )
}
