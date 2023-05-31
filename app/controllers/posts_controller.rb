class PostsController < ApplicationController
    before_action :authenticate
    before_action :find_post, only: [:show]


    def create
        post = Post.create!(post_params)
        render json: post, status: :ok
    end

    def index
        render json: Post.all
    end

    def show
        render json: @post
    end


    private

    def post_params
        params.permit(:title, :content, :image, :likes)
    end

    def find_post
        @post = Post.find_by(id: params[:id])
    end
end
