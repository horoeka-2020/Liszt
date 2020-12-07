import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import FilmLibrary from './FilmLibrary'
// import FilmSearchBar from './FilmSearchBar'
// import SearchResults from './SearchResults'
const FilmList = (props) => {
  const [result, setResult] = useState([])

  return (
    <div>
      <FilmSearchBar setResult={setResult} history={props.history} />
      <Route exact path='/filmlist' component={FilmLibrary} history={props.history}/>
      <Route
        exact
        path='/filmlist/searchresults'
        render={() => (
          <SearchResults
            result={result}
            // resetResults={resetResults}
            history={props.history}
          />
        )}
      />
    </div>
  )
}

export default FilmList
