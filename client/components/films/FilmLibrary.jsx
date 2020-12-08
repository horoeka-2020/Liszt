import React from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import FilmCard from './FilmCard'
import { getFilmList } from '../../apis/films'

class FilmLibrary extends React.Component {
  state = {
    films: []
  }

  componentDidMount() {
    getFilmList(8).then((films) =>
      this.setState({
        films: films
      })
    )
  }

  refreshList = (films) => {
    this.setState({
      films: films
    })
  }

  render() {
    return (
      <div>
        {this.state.films.map((film) => {
          return (
            <FilmCard
              title={film.Title}
              image={film.Poster}
              filmApiId={film.imdbID}
              refreshList={this.refreshList}
              key={film.imdbID}
              year={film.Year}
            />
          )
        })}
      </div>
    )
  }
}

export default FilmLibrary
