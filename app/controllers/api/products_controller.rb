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


# def search 
#     @product = Product.where('name LIKE %(?)% OR description', params[:query], params[:query])
#     render :index
# end

# debouncing 