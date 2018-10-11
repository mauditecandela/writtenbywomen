import React from 'react';

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
         console.log(response)
         newState = {};
         newState.name = response.name;
         this.setState(author = newState);
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
