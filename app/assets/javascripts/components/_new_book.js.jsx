class NewBook extends React.Component {
  constructor(props) {
    super(props);
    }

    description(input) {
      this.description = input;
    }

    bookName(input) {
      this.bookName = input;
    }

    handleSubmit(event) {
      var name = this.bookName.value;
      var description = this.description.value;
      $.ajax({
        url: 'api/v1/books',
        type: 'POST',
        data: { book: { name: name, description: description } },
        success: (response) => {
          console.log('it worked!', response)
        }
      })
    }

  render() {
    return (
      <div>
        <input ref={this.bookName} placeholder="Enter the name of the book" />
        <input ref={this.description} placeholder="Add a description" />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
