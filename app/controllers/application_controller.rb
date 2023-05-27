class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

before_action :authenticate

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  private

  def authenticate
    render json: { errors: ["Not authorized"]}, status: :unauthorized unless current_user
  end

  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
