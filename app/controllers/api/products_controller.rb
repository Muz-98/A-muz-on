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

    def search
        @products = Product.get_search(search_params)
        render :search_results
    end

    # private 

    # def search_params
    #     params.require(:search).permit(title: "", description: "")
    # end
    
end


