import React from 'react'
import FilmDetail from './FilmDetail'

const FilmSearchResults = (props) => {
  return (
    <div>
      {props.result.map((film) => (
        <FilmDetail
          key={film.imdbID}
          Title={film.Title}
          Poster={film.Poster}
          filmApiId={film.imdbID}
          Year={film.Year}
          history={props.history}
        />
      ))}
    </div>
  )
}

export default FilmSearchResults
