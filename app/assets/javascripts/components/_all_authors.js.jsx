class AllAuthors extends React.Component {
  componentDidMount() {
    this.handleDelete = this.props.handleDelete;
  }

  render() {
    var authors = this.props.authors.map((author) => {

      return (
        <div key={author.id}>
          <h3>{author.goodreads_id}</h3>
        </div>
      )
    });
    return (
      <div>
        {authors}
      </div>
    )
  }
};
