class CreateChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :choices do |t|
      t.string :content
      t.boolean :is_answer
      t.references :question, foreign_key: true
      t.timestamps
    end
  end
end
