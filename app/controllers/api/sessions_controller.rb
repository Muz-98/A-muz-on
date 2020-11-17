class SessionsController < ApplicationController
    def create 
        # debugger 
        @user = User.find_by_credentials(
			params[:user][:username],
			params[:user][:password]
		)

		if @user 
            login!(user) 
            render 'api/users/show'         
		else 
			render json: 'invalid credentials'
		end
    end

    def destroy         
        if logged_in?
            render json: {} if logout!
        else
            render json: 'Not successfully logout'
        end
    end
end