class CreateConcentrations < ActiveRecord::Migration[6.0]
  def change
    create_table :concentrations do |t|

      t.timestamps
    end
  end
end
