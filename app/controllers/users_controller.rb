class UsersController < ApplicationController

    def create
        # byebug
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        # byebug
        render json: @current_user
    end


    private

    def user_params
        params.permit(:actual_name, :username, :password, :password_confirmation, :image_url)
    end
end
