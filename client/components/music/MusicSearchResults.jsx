import React from 'react'
import MusicDetail from './MusicDetail'

const MusicSearchResults = (props) => {
  return (
    <div>
      {props.result.map((music) => (
        <MusicDetail
          id={music.id}
          artist={music.artist.name}
          title={music.title}
          image={music.album.cover_big}
          album={music.album.title}
          history={props.history}
          key={music.id}
        />
      ))}
    </div>
  )
}

export default MusicSearchResults
