import React from 'react'

export class SearchBar extends React.Component {

  render() {
    return (
      <div>
      <input
      type="text"
      placeholder="categories"/>
      {/*  onChange={this.handleChange}/> */}

    <button>Search</button>
  
      {/* // onClick={() => this.props.dispatch(fetchPosts(`${this.state.category}`))}>Search</button> */}
  </div>
    )
    }
  }

  export default SearchBar