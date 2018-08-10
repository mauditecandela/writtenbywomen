class CreateAuthors < ActiveRecord::Migration[5.1]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :surname
      t.date :date_of_birth
      t.date :date_of_death

      t.timestamps
    end
  end
end
