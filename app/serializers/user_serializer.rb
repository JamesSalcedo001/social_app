class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :comments, :posts
  has_many :comments
  has_many :posts, through: :comments
end
