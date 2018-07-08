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
      console.log(this.bookName.value)
      console.log(this.description.value)
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
