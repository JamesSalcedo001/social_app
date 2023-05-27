class ChangeDefaultForPostLikes < ActiveRecord::Migration[6.1]
  def change
    change_column :posts, :likes, :integer, :default => 0
  end
end
