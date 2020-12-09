import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import MusicLibrary from './MusicLibrary'
import MusicSearchBar from './MusicSearchBar'
import MusicSearchResults from './MusicSearchResults'
const MusicList = (props) => {
  const [result, setResult] = useState([])

  return (
    <div>
      <MusicSearchBar setResult={setResult} history={props.history} />
      <Route
        exact
        path='/musiclist'
        component={MusicLibrary}
        history={props.history}
      />
      <Route
        exact
        path='/musiclist/searchresults'
        render={() => (
          <MusicSearchResults result={result} history={props.history} />
        )}
      />
    </div>
  )
}

export default MusicList
