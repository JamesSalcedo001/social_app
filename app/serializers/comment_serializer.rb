class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes, :post_id
  has_one :post
  has_one :user
end
