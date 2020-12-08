import React from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import MusicCard from './MusicCard'
// import { getMusicList } from '../../apis/music'

class MusicLibrary extends React.Component {
  state = {
    musics: []
  }

  // componentDidMount() {
  //   getMusicList(8).then((musics) =>
  //     this.setState({
  //       musics: musics
  //     })
  //   )
  // }

  refreshList = (musics) => {
    this.setState({
      musics: musics
    })
  }

  render() {
    return (
      <div>
        {this.state.musics.map((music) => {
          return (
            <MusicCard
              title={music.Title}
              image={music.Poster}
              filmApiId={music.imdbID}
              refreshList={this.refreshList}
              key={music.imdbID}
              year={music.Year}
            />
          )
        })}
      </div>
    )
  }
}

export default MusicLibrary
