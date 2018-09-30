class CreateAuthor < ActiveRecord::Migration[5.1]
  def change
    create_table :authors do |t|
      t.integer :goodreads_id
    end

    create_table :male_authors do |t|
      t.integer :goodreads_id
    end

    create_table :author_male_authors do |t|
      t.integer :author_id
      t.integer :male_author_id
    end

    create_table :author_authors do |t|
      t.integer :first_author_id
      t.integer :second_author_id
    end
  end
end
