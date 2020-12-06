import React from 'react'
// import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import BookCard from './BookCard'
import { getBookList } from '../apis/books'

class BookLibrary extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    getBookList(8).then((books) =>
      this.setState({
        books: books.books
      })
    )
  }

  render() {
    return (
      <div>
        {this.state.books.map((book) => {
          return <BookCard image={book.imageUrl} key={book.bookApiId} />
        })}
      </div>
    )
  }
}

export default BookLibrary

// export default class Carousel extends React.Component {
//   state = {
//     books: []
//   }

//   componentDidMount() {
//     getBookList(8).then((books) => {
//       this.setState({
//         books: books
//       })
//       console.log(this.state.books)
//     })
//   }

//   // fetchPhotos () {
//   //   const options = {
//   //     duration: 300,
//   //     onCycleTo: () => {
//   //       console.log('New Slide')
//   //     }
//   //   }
//   //   M.Carousel.init(this.Carousel, options)
//   // }

//   render() {
//     console.log('this', this.state.books)
//     return (
//       <div
//       // ref={(Carousel) => {
//       //   this.Carousel = Carousel
//       // }}
//       // className='carousel'
//       >
//         <h1>carousel!</h1>
//       </div>
//     )
//   }
// }
