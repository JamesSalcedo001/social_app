class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :user, :user_id, :post
  has_one :post
  has_one :user

end
