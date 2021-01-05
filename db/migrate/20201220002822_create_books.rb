class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :name
      t.integer :genre_id
      t.string :comment
      t.references :user, foreign_key: true
      t.integer :favourite
      t.timestamps
    end
  end
end
