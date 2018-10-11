import React from 'react';
import GoodreadsJsonApi from 'goodreads-json-api';

class Author extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        author: {}
      }
    }

  componentDidMount() {
    fetch(`/authors/${this.props.author.id}.xml`)
       .then(response => response.text())
       .then((response) => {
         const resp = GoodreadsJsonApi.convertToJson(response)
         console.log(resp)
         let newState = {}
         newState = {author: {name: resp.author.name }}
         this.setState(newState)
       }).catch((err) => {
           console.log('fetch', err)
       })
  }

  render() {
    console.log(this.state.author.name);
    return (
      <section>
        {this.state.author.name}
      </section>
    )
  }
};

export default Author;
