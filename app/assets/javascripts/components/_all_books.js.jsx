class AllBooks extends React.Component {
  render() {
    var books = this.props.books.map((book) => {
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
