class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes
  has_one :post
  has_one :user
end
