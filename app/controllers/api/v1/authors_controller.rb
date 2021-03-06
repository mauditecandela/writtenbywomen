class Api::V1::AuthorsController < Api::V1::BaseController
  def index
    respond_to do |format|
      format.html
      format.json{ render :json => Author.all }
    end
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
    @author_data = Crack::XML.parse(goodreads_api(params["id"]))
    respond_to do |format|
      format.html
      format.json{ render :json => @author_data }
    end
  end

  def search_authors
    query = params["query"]
    @author_data = Crack::XML.parse(goodreads_search(query))
    respond_to do |format|
      format.html
      format.json{ render :json => @author_data }
    end
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

  def goodreads_search(query)
    url = "https://www.goodreads.com/api/author_url/"
    key = "VWw1eb9RgwVIwQq31TL2A"
    RestClient.get("#{url}#{query}?key=VWw1eb9RgwVIwQq31TL2A")
  end
end
