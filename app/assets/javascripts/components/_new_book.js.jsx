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
        <input ref={this.bookName} placeholder={I18n.t('new_book.title_placeholder')} />
        <input ref={this.description} placeholder={I18n.t('new_book.description_placeholder')} />
        <button onClick={this.handleClick}>{I18n.t('new_book.submit')}</button>
      </div>
    )
  }
}
