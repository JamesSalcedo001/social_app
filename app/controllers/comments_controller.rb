# class CommentsController < ApplicationController
#     before_action :find_comment, except: [:create, :index]

#     def show
#         render json: @comment
#     end

#     def index
#         comments = @current_user.comments
#         # comments = Comment.all
#         render json: comments
#     end

#     def create
#         comment = @current_user.comments.create!(comment_params)
#         render json: comment
#         # comment = Comment.create!(comment_params)
#         # render json: comment, status: :ok
#     end 

#     def update
#         @comment.update(comment_params)
#         render json: @comment
#     end

#     def destroy
#         @comment
#         @comment.destroy
#         head :no_content
#     end

#     private 

#     def comment_params
#         params.permit(:body, :post_id, :user_id)
#     end

#     def find_comment
#         @comment = @current_user.comments.find_by(id: params[:id])
#         render json: {error: "No comments here"}, status: :not_found unless @comment
#     end
# end



class CommentsController < ApplicationController
    before_action :find_comment, except: [:create, :index]
    before_action :is_owner?, only: [:update, :destroy]

    def show
        render json: @comment
    end

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
        # head :no_content
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
