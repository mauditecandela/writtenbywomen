import React from 'react';

import Author from './_author.js'

class AllAuthors extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        authors: [],
        authorsData: {}
      }
    }

  componentWillMount() {
    fetch('/api/v1/authors.json')
      .then(response => response.json())
      .then(data => {
        this.setState({authors: Object.keys(data)})
        this.setState({authorsData: data })
    })
      .catch(err => console.error(this.props.url, err.toString()));

  }
  
  render() {
    let authorsData = this.state.authorsData;
    let authors = this.state.authors.map(function(author) {
      return (
        <span key={author}>
          <Author id={author} authorsData={authorsData[author]} />
        </span>
      )
    })
    return (
      <section>
        {authors}
      </section>
    )
  }
};

export default AllAuthors;
