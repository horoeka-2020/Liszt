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
              director={film.director}
              title={film.title}
              image={film.imageUrl}
              isbn={film.filmApiId}
              refreshList={this.refreshList}
              key={film.filmApiId}
            />
          )
        })}
      </div>
    )
  }
}

export default FilmLibrary
