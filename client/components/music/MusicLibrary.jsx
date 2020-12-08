import React from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import MusicCard from './MusicCard'
import { getMusicList } from '../../apis/music'

class MusicLibrary extends React.Component {
  state = {
    musics: []
  }

  componentDidMount () {
    getMusicList(8).then((musics) =>
      this.setState({
        musics: musics.songs
      })
    )
  }

  refreshList = (musics) => {
    this.setState({
      musics: musics
    })
  }

  render () {
    return (
      <div>
        {this.state.musics.map((music) => {
          return (
            <MusicCard
              title={music.title}
              image={music.imageUrl}
              musicApiId={music.musicApiId}
              refreshList={this.refreshList}
              key={music.musicApiId}
              artist={music.artist}
              album={music.album}
            />
          )
        })}
      </div>
    )
  }
}

export default MusicLibrary
