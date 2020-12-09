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
          console.log('music from render', music)
          return (
            <MusicCard
              title={music.title}
              image={music.imageUrl}
              musicApiId={music.songApiId}
              refreshList={this.refreshList}
              key={music.songApiId}
              artist={music.artist}
              album={music.album}
              id={music.songApiId}
            />
          )
        })}
      </div>
    )
  }
}

export default MusicLibrary
