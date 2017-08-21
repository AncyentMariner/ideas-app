class CreateIdeas < ActiveRecord::Migration[5.1]
  def change
    create_table :ideas do |t|
      t.string :body
      t.string :title

      t.timestamps
    end
  end
end