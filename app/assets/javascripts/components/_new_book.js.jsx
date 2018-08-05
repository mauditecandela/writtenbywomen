class NewBook extends React.Component {
  description(input) {
    this.description = input;
  }

  bookName(input) {
    this.bookName = input;
  }

  componentWillMount() {
    handleSubmit= this.props.handleSubmit;
  }

  handleClick(event) {
    var name = this.bookName.value
    var description = this.description.value;
    $.ajax({
      url: 'api/v1/books',
      type: 'POST',
      data: { book: { name: name, description: description } },
      success: (book) => {
        handleSubmit(book);
      }
    })
  }

  render() {
    return (
      <div>
        <input ref={this.bookName} placeholder="Enter the name of the book" />
        <input ref={this.description} placeholder="Add a description" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}
