class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :user_id
  has_one :post
  has_one :user
end
