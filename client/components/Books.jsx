import React from 'react'

import SearchBar from './SearchBar'
import MaterializeCarousel from './MaterializeCarousel'

export class Books extends React.Component {


  render() {
    return (
      <div>
        <SearchBar/>
        <MaterializeCarousel/>
        
      </div>
    )
  }
}


export default Books