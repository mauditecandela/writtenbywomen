import React from 'react';

class AllAuthors extends React.Component {
  componentDidMount() {
    this.handleDelete = this.props.handleDelete;
  }

  render() {
    var authors = this.props.authors.map((author) => {
      return (
        <span key={author.id}>
          <h3>{author.id}</h3><a href={`/authors/${author.id}`}>Go to author</a>
        </span>
      )
    });
    return (
      <section>
        {authors}
      </section>
    )
  }
};

export default AllAuthors;
