class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :posts, through: :comments


    has_secure_password

    validates :username, presence: true, uniqueness: true
end
