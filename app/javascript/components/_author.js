import React from 'react';

class Author extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name: this.props.author_data.GoodreadsResponse.author.name,
        books: this.props.author_data.GoodreadsResponse.author.books.book
      }
    }

  render() {
    const books = this.state.books.map(function(book) {
      return (
        <span key={"book_" + book.id}>
          <p>{book.title}</p>
        </span>
      )
    });
    return (
      <section>
        <h1>{this.state.name}</h1>
        {books}
      </section>
    )
  }
};

export default Author;
