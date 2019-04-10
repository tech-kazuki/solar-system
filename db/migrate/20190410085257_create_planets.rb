class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string    :title
      t.text      :text
      t.text      :image
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
