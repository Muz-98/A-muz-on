class Api::ProductsController < ApplicationController
    def show
        # debugger 
        @product = Product.find(params[:id])
        render :show
    end

    def index 
        @products = Product.all 
        render :index
    end
end
