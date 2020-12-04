import React from 'react'

import SearchBar from './SearchBar'
import Carousel from './Carousel'

export class Books extends React.Component {


  render() {
    return (
      <div>
        <SearchBar/>
        <Carousel/>
        
      </div>
    )
  }
}


export default Books