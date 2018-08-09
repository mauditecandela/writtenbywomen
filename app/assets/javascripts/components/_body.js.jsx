class Body extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        books: []
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    }

  componentDidMount() {
    fetch('/api/v1/books.json')
      .then(response => response.json())
      .then(data => {
        this.setState({books: data })
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  handleSubmit(book) {
    var newState = this.state.books.concat(book);
    this.setState({ books: newState })
  }

  removeBookClient(id) {
    var newBooks = this.state.books.filter((book) => {
      return book.id != id;
    });
    this.setState({books: newBooks})
  }

  handleDelete(book) {
    $.ajax({
        url: `/api/v1/books/${book.id}`,
        type: 'DELETE',
        success: (response) => {
          this.removeBookClient(book.id);
        }
    })
  }


  render() {
    console.log(this);
    return (
      <div>
        <AllBooks books={this.state.books}  handleDelete={this.handleDelete}/>
        <NewBook handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
