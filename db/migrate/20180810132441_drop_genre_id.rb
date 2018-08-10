class DropGenreId < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :genre_id, :integer
  end
end
