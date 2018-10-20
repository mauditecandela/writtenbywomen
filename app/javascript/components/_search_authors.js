import React from 'react';

class SearchAuthors extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        author: {}
      }
      this.searchAuthors = this.searchAuthors.bind(this);
    }

  searchAuthors() {
    fetch(`/search_authors.json?query=${this.refs.query.value}`)
      .then(response => response.json())
      .then(data => {
        this.setState({author: data.GoodreadsResponse.author})
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  renderSuggestion() {
    if (this.state.author.name) {
      return (
        <p>Did you mean <a href={`/authors/${this.state.author.id}`}>{this.state.author.name}</a>?</p>
      )
    }
  }

  render() {
    return (
      <section>
        <input ref="query" type="text"></input>
        <button onClick={this.searchAuthors}>Search</button>
        {this.renderSuggestion()}
      </section>
    )
  }
};

export default SearchAuthors;
