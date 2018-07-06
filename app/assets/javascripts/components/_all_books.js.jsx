class AllBooks extends React.Component {
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

  render() {
    var books = this.state.books.map((book) => {
      return (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.description}</p>
        </div>
      )
    });
    return (
      <div>
        {books}
      </div>
    )
  }
};
