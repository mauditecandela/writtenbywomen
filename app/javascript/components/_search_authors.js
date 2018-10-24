import React from 'react';

class SearchAuthors extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        authors: []
      }
      this.searchAuthors = this.searchAuthors.bind(this);
    }

  searchAuthors() {
    fetch(`http://openlibrary.org/search.json?author=${this.refs.query.value}`)
      .then(response => response.json())
      .then(data => {
        const authors = this.renderSuggestions(data.docs);
        this.setState({authors})
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  renderSuggestions(authors) {
    const listOfAuthors = [];
    for (let i = 0; i < authors.length; i++) {
      listOfAuthors[i] = authors[i].author_name[0]
    }
    return Array.from(new Set(listOfAuthors));
  }

  render() {
    const authors = this.state.authors.map((author) => {
      return (
        <span key={"author_" + this.state.authors.indexOf(author)}>
          <p>{author}</p>
        </span>
    )
    });
    return (
      <section>
        <input ref="query" type="text"></input>
        <button onClick={this.searchAuthors}>Search</button>
        {authors}
      </section>
    )
  }
};

export default SearchAuthors;
