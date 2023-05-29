class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true
end
