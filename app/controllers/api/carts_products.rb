class Api::CartsProductsController < ApplicationController

    def create 
        @cart_products = CartsProducts.new(cart_products_params)
    end

    def update
    end

    def destroy 
        
    end

    private 

    def cart_products_params
        params.require(:cartsProducts).permit(:product_id)
    end
end
