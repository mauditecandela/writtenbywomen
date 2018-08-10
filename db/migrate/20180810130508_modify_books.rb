class ModifyBooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :name
    remove_column :books, :description
    add_column :books, :title, :string
    add_column :books, :author_id, :integer
  end
end
