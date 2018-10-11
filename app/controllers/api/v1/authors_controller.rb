class Api::V1::AuthorsController < Api::V1::BaseController
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
    author = Author.find(params["id"])
    author.update_attributes(book_params)
    respond_with author, json: author
  end

  def show
    author = Author.find(params["id"])
    api_call = goodreads_api(author.goodreads_id)
    respond_with api_call
  end

  private

  def book_params
    params.require(:book).permit(:id, :goodreads_id)
  end

  def goodreads_api(id)
    url = "https://www.goodreads.com/author/list.xml"
    key = "VWw1eb9RgwVIwQq31TL2A"
    RestClient.get("#{url}?key=VWw1eb9RgwVIwQq31TL2A&id=#{id}")
  end
end
