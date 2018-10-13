import React from 'react';

import Author from './_author.js'

class AllAuthors extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        authors: {}
      }
    }

  componentWillMount() {
    fetch('/api/v1/authors.json')
      .then(response => response.json())
      .then(data => {
        this.setState({authors: data})
    })
      .catch(err => console.error(this.props.url, err.toString()));

  }

  render() {
    let authors = Object.keys(this.state.authors).map((author) => {
      return (
        <span key={author}>
          <Author id={author} name={this.state.authors[author].name} surname={this.state.authors[author].surname} />
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
