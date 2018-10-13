import React from 'react';

class Author extends React.Component {
  render() {
    console.log(this.props.name)
    return (
      <p><a href={`/authors/${this.props.id}`}>{this.props.name} {this.props.surname}</a></p>
    )
  }
};

export default Author;
