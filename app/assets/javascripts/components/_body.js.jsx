class Body extends React.Component {
  constructor(){
      super()
      this.state = {
        books: []
      }
    }

  componentDidMount() {
    fetch('/api/v1/books.json')
      .then(response => response.json())
      .then(data => {
        this.setState({books: data })
    })
      .catch(err => console.error(this.props.url, err.toString()))
  }

  render(){
    return (
      <div>
        <AllBooks books={this.state.books}/>
        <NewBook />
      </div>
    )
  }
}
