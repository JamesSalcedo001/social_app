class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :user, :user_id
  has_one :post
  has_one :user

  # def user
  #   {user: object.user.username}
  # end
end
