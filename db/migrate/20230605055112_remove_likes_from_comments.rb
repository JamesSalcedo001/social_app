class RemoveLikesFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :likes, :integer
  end
end
