class Api::UsersController < ApplicationController
    def create 
        user = User.new(user_params)

        if user.save
            login!(user)
            Cart.create!(user_id: user.id)
            @user = User.includes(:cart).find_by(id: user.id)
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
