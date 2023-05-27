class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image, :likes
end
