class Api::CartsController < ApplicationController
    before_action :ensure_logged_in, only: [:show]
    def show 
        debugger 
        @cart = Cart.find_by(user_id: current_user.id)
        render :show
    end
end