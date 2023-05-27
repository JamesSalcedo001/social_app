class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar
  has_many :comments
  has_many :posts, through: :comments
end
