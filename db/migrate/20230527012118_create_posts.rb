class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content
      t.string :image
      t.integer :likes

      t.timestamps
    end
  end
end
