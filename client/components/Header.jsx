import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className='container '>
      <Link to='/home'>
        <h1 className='header'>LISZT</h1>
      </Link>
    </header>
  )
}

export default Header
