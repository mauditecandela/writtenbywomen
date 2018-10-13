import React from 'react';

class Author extends React.Component {
  render() {
    let authorName;
    if (this.props.authorsData) {
      authorName = this.props.authorsData.GoodreadsResponse.author.name;
    }
    return (
      <p><a href={`/authors/${this.props.id}`}>{authorName}</a></p>
    )
  }
};

export default Author;
