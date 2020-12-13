class CreateFronts < ActiveRecord::Migration[6.0]
  def change
    create_table :fronts do |t|

      t.timestamps
    end
  end
end
