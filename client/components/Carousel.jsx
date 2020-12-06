import React from 'react'
// import M from 'materialize-css'
// import 'materialize-css/dist/css/materialize.min.css'
import CarouselImage from './CarouselImage'
import { getBookList } from '../apis/books'

export default class Carousel extends React.Component {
  state = {
    books: []
  }

  componentDidMount () {
    getBookList(8)
      .then((books) => {
        this.setState({
          books: books
        })
        console.log(this.state.books)
      })
  }

  // fetchPhotos () {
  //   const options = {
  //     duration: 300,
  //     onCycleTo: () => {
  //       console.log('New Slide')
  //     }
  //   }
  //   M.Carousel.init(this.Carousel, options)
  // }

  render () {
    console.log('this', this.state.books)
    return (
      <div
        // ref={(Carousel) => {
        //   this.Carousel = Carousel
        // }}
        className='carousel'
      >

        {/* <p>{this.state.books}</p> */}
        {/* {this.state.books.map((book) => {
          <h1 key={book.id}>{book.imageUrl}</h1>
        })} */}
      </div>
    )
  }
}
