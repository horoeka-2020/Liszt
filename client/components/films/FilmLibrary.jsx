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
        films: films.films
      })
    )
  }

  refreshList = (films) => {
    this.setState({
      films: films
    })
  }

  render() {
    console.log(this.state.films)
    return (
      <div>
        {this.state.films.map((film) => {
          return (
            <FilmCard
              title={film.title}
              image={film.imageUrl}
              filmApiId={film.filmApiId}
              refreshList={this.refreshList}
              key={film.imdbID}
              year={film.year}
            />
          )
        })}
      </div>
    )
  }
}

export default FilmLibrary
