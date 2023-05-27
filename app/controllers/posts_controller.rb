class PostsController < ApplicationController
    before_action :authenticate
    before_action :find_post, only: [:show, :update, :destroy]
    skip_before_action :authenticate


    def create
        post = Post.create!(post_params)
        render json: post, status: :ok
    end

    def index
        render json: Post.all
    end

    private

    def post_params
        params.permit(:title, :content, :image, :likes)
    end
end
