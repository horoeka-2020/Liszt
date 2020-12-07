import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import FilmLibrary from './FilmLibrary'
import FilmSearchBar from './FilmSearchBar'
import FilmSearchResults from './FilmSearchResults'
const FilmList = (props) => {
  const [result, setResult] = useState([])

  return (
    <div>
      <FilmSearchBar setResult={setResult} history={props.history} />
      <Route
        exact
        path='/filmlist'
        component={FilmLibrary}
        history={props.history}
      />
      <Route
        exact
        path='/filmlist/searchresults'
        render={() => (
          <FilmSearchResults
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
