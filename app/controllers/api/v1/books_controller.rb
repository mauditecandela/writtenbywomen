class Api::V1::BooksController < Api::V1::BaseController
  def index
    respond_with Book.all
  end

  def create
    respond_with :api, :v1, Book.create(item_params)
  end

  def destroy
    respond_with Book.destroy(params[:id])
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
