class AddGenreId < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :genre_id, :integer

    create_table :genres do |t|
      t.string :name

      t.timestamps
    end

    create_table :books_genres do |t|
      t.integer :book_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
