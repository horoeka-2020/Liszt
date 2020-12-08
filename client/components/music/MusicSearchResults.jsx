import React from 'react'
import MusicDetail from './MusicDetail'

// search returns an object. how to 'map' (obviously not map.) over object?

const MusicSearchResults = (props) => {
  return (
    <div>
      {props.result.map((music) => (
        <MusicDetail
          id={music.id}
          artist={music.artist.name}
          title={music.title}
          image={music.album.cover}
          album={music.album.title}
          history={props.history}
        />
      ))}
    </div>
  )
}

export default MusicSearchResults
