class AllBooks extends React.Component {
  componentDidMount() {
    this.handleDelete = this.props.handleDelete;
  }

  render() {
    var books = this.props.books.map((book) => {

      return (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.description}</p>
          <button onClick={this.handleDelete.bind(this, book)}>Delete</button>
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
