import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'

import axios from 'axios'

export default function MusicSearchBar(props) {
  const [music, setMusic] = useState('')
  // const [apiKey, setApiKey] = useState('54d576757464ced0bb7d31c006aaad2a')
  // not currently used?

  function handleChange(e) {
    const music = e.target.value
    setMusic(music)
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${music}`
      )
      .then((data) => {
        console.log(data.data.data)
        props.setResult(data.data.data)
        props.history.push('/musiclist/searchresults')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <form className='search-bar' style={{ borderColor: '#ff4fc4' }} onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          className='searchbar search-font'
          placeholder='Search for music'
          autoComplete='off'
          style={{ color: '#ff4fc4' }}
        />
        <IconButton type='submit'>
          {' '}
          <SearchIcon style={{ color: '#ff4fc4' }}/>
        </IconButton>
      </form>
    </>
  )
}
