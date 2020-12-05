import React from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export class Carousel extends React.Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log('New Slide')
      }
    }
    M.Carousel.init(this.Carousel, options)
  }

  // fetchPhotos(){

  // }

  render() {
    return (
      <div
        ref={(Carousel) => {
          this.Carousel = Carousel
        }}
        className='carousel'
      >
        <a className='carousel-item' href='#one!'>
          <img src='https://lorempixel.com/250/250/nature/1' />
        </a>
        <a className='carousel-item' href='#two!'>
          <img src='https://lorempixel.com/250/250/nature/2' />
        </a>
        <a className='carousel-item' href='#three!'>
          <img src='https://lorempixel.com/250/250/nature/3' />
        </a>
      </div>
    )
  }
}

export default Carousel
