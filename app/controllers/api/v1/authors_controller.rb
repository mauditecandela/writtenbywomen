class Api::V1::BooksController < Api::V1::BaseController
  def index
    respond_with Author.all
  end

  def create
    respond_with :api, :v1, Author.create(author_params)
  end

  def destroy
    respond_with Author.destroy(params[:id])
  end

  def update
    book = Book.find(params["id"])
    book.update_attributes(book_params)
    respond_with book, json: book
  end

  private

  def book_params
    params.require(:book).permit(:id, :name, :description)
  end
end


def goodreads_API
  key = "VWw1eb9RgwVIwQq31TL2A"
  secret = "TJ7GRGNIos1s8ILUMLKlZDFWkIOKgjhPhz7eIXva44"
end
