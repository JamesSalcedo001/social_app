class PostsController < ApplicationController

    
    def create
        post = Post.create!(post_params)
        render json: post, status: :ok
    end

    def index
        render json: Post.all
    end


    private

    def post_params
        params.permit(:title, :content, :image)
    end

end
