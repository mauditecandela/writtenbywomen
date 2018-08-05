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

  removeBookClient(id) {
    var newBooks = this.state.books.filter((book) => {
      return book.id != id;
    })
    this.setState({books: newBooks})
  }

  handleDelete(id) {
    $.ajax({
        url: `/api/v1/books/${id}`,
        type: 'DELETE',
        success(response) {
          this.removeBookClient(id);
        }
    })
  }


  render() {
    return (
      <div>
        <AllBooks books={this.state.books}  handleDelete={this.handleDelete}/>
        <NewBook handleSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}
