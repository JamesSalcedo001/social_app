class PostsController < ApplicationController
    # skip_before_action only: [:fun_posts]

    # def fun_posts
    #     posts_filtered = @current_user.posts.filter {|p| p.title}
    #     render json: posts_filtered
    # end

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