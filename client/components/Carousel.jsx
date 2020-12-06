import React from 'react'
// import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import CarouselImage from './CarouselImage'
import { getBookList } from '../apis/books'

class Carousel extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    getBookList(8).then((books) =>
      this.setState({
        books: books
      })
    )
  }
  render() {
    return <div>{console.log(this.state.books.books)}</div>
  }
}

export default Carousel

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
