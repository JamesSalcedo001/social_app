class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image, :users, :comments
  has_many :comments
  has_many :users, through: :comments
end
