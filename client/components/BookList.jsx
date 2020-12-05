import React from 'react'
import { useState } from 'react'
import { Route } from 'react-router-dom'
import Carousel from './Carousel'
import BookApi from './BookApi'
import SearchResults from './SearchResults'
const BookList = (props) => {
  const [result, setResult] = useState([])

  // const resetResults = () => {
  //   setResult([])
  //   console.log('hello')
  // }
  return (
    <div>
      <BookApi setResult={setResult} history={props.history} />
      <Route exact path='/booklist' component={Carousel} />
      <Route
        exact
        path='/booklist/searchresults'
        render={() => (
          <SearchResults
            result={result}
            // resetResults={resetResults}
            history={props.history}
          />
        )}
      />
    </div>
  )
}

export default BookList
