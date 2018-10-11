import React from 'react';

import AllAuthors from './_all_authors.js';

class Body extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        authors: []
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    }

  componentDidMount() {
    fetch('/api/v1/authors.json')
      .then(response => response.json())
      .then(data => {
        this.setState({authors: data })
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }

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
    console.log(this);
    return (
      <div>
        <AllAuthors authors={this.state.authors}  handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default Body;
