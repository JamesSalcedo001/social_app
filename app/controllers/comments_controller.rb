class CommentsController < ApplicationController
    before_action :find_post, except: [:create, :index]
    skip_before_action :authenticate, except: [:update, :destroy]

    def show
        render json: @comment
    end

    def index
        comments = @current_user.comments
        render json: comments
    end

    def create
        comment = current_user.comments.create!(comment_params)
        render json: comment
    end 

    def update
        @comment.update(comment_params)
        render json: @comment
    end

    def destroy
        @comment.destroy
        head :no_content
    end

    private 

    def comment_params
        params.permit(:body, :post_id, :user_id)
    end

    def find_comment
        @comment = @current_user.comments.find_by(id: params[:id])
        render json: {error: "No comments here"}, status: :not_found unless @comment
    end
end
