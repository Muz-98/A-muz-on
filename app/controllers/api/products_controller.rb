class Api::ProductsController < ApplicationController
    def show
        @product = Product.find(params[:id])
        render :show
    end

    def index 
        @products = Product.all 
        render :index
    end

    def search
        @products = Product.search_by(params[:search])
        render :search_results
    end

end


