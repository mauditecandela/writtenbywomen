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
        const authors = this.defineListOfAuthors(data.docs);
        this.setState({authors})
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  defineListOfAuthors(authors) {
    const listOfAuthors = [];
    for (let i = 0; i < authors.length; i++) {
      if (listOfAuthors.indexOf(authors[i].author_name[0]) < 0) {
        listOfAuthors.push(authors[i].author_name[0]);
        this.goodreadsID(authors[i].author_name[0]);
      }
    }
    return listOfAuthors;
  }

  goodreadsID(author) {
    fetch(`/search_authors.json?query=${author}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.GoodreadsResponse.author);
        return data.GoodreadsResponse.author;
    })
      .catch(err => console.error(this.props.url, err.toString()));
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
