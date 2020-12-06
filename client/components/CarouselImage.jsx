import React from 'react'

class CarouselImage extends React.Component {
  render () {
    return (
      <a className='carousel-item' href='#one!'>
        <img src={this.props.books.imageUrl} />
      </a>
    )
  }
}

export default CarouselImage
