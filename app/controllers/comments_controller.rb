class CommentsController < ApplicationController
    before_action :find_comment, except: [:create, :index]
    before_action :is_owner?, only: [:update, :destroy]
  
    def index
        render json: Comment.all
    end

    def create
        render json: @current_user.comments.create!(comment_params)
    end 

    def update
        @comment.update!(comment_params)
        render json: @comment
    end

    def destroy
        @comment.destroy
        render json: @comment
    end



    private 

    def comment_params
        params.permit(:body, :post_id)
    end

    def find_comment
        @comment = Comment.find_by(id: params[:id])
    end

    def is_owner?
        permitted = @comment.user_id == @current_user.id
        render json: {errors: ["current user does not own this!"]}, status: :forbidden unless permitted
    end

end
