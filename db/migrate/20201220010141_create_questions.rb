class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :content
      t.string :cont_color
      t.string :answer
      t.string :ans_color
      t.references :book, foreign_key: true
      t.timestamps
    end
  end
end
