class Api::CartsProductsController < ApplicationController

    def create 
        @carts_products = CartsProducts.new(carts_products_params)
        @carts_products.cart_id = current_user.cart.id

        if @carts_products.save 
            render :show 
        else 
            render json: @carts_products.errors.full_messages, status: 401
        end
    end

    def update
    end

    def destroy 
        @carts_products = CartsProducts.find(params[:id])
        @carts_products.destroy 
        render :show
    end

    private 

    def carts_products_params
        params.require(:cartsProducts).permit(:product_id)
    end
end
