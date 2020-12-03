import React from 'react'

import Header from './Header'
import Home from './Home'



export class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Header/>
      <Home/>
      </div>
    )
  }
}


export default App
