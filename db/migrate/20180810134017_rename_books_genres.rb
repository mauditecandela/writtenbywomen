class RenameBooksGenres < ActiveRecord::Migration[5.1]
  def change
    rename_table :books_genres, :book_genres
  end
end
