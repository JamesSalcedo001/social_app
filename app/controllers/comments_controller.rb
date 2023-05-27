class CommentsController < ApplicationController
    before_action :find_post, except: [:create, :index]

    def show
        render json: @comment
    end

    def index
        render json: @current_user.comments
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
        params.permit(:body)
    end

    def find_comment
        @comment = @current_user.comments.find_by(id: params[:id])
        render json: {error: "No comments here"}, status: :not_found unless @comment
    end
end
