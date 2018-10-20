import React from 'react';

import SearchAuthors from './_search_authors.js'
import AllAuthors from './_all_authors.js';

class Body extends React.Component {
  handleSubmit(author) {
    var newState = this.state.authors.concat(author);
    this.setState({ authors: newState })
  }

  removeBookClient(id) {
    var newAuthors = this.state.authors.filter((author) => {
      return author.id != id;
    });
    this.setState({authors: newAuthors})
  }

  handleDelete(author) {
    $.ajax({
        url: `/api/v1/authors/${author.id}`,
        type: 'DELETE',
        success: (response) => {
          this.removeAuthorClient(author.id);
        }
    })
  }

  render() {
    return (
      <div>
        <SearchAuthors />
      </div>
    )
  }
}

export default Body;
