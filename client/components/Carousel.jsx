import React from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import CarouselImage from './CarouselImage'
import { getBookList } from '../apis/books'

export default class Carousel extends React.Component {
  state = {
    books: []
  }

  componentDidMount () {
    getBookList(8)
      .then(books =>
        this.setState({
          books: books
        }))
  }

  fetchPhotos () {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log('New Slide')
      }
    }
    M.Carousel.init(this.Carousel, options)
  }

  render () {
    console.log('i am here', this.state.books)
    return (
      <div
        ref={(Carousel) => {
          this.Carousel = Carousel
        }}
        className='carousel'
      >
        {this.state.books.map((book) => {
        })}
      </div>
    )
  }
}
