class Body extends React.Component {
  constructor(props){
      super(props);
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

  handleSubmit(book) {
    var newState = this.state.books.concat(book);
    this.setState({ books: newState })
  }

  render(){
    return (
      <div>
        <AllBooks books={this.state.books}/>
        <NewBook handleSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}
