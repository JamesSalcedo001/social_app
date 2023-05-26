class UsersController < ApplicationController
    def show
        # user = User.find_by(id: session[:user_id])
        render json: current_user, status: :ok
    end

    def index
        render json: User.all, status: :ok
    end
end
