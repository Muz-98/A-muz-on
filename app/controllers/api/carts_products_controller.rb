class Api::CartsProductsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def index 
        @carts_products = CartsProducts.all 
        render :index  
    end

    def create 
        @carts_product = CartsProducts.new(carts_products_params)
        @carts_product.cart_id = current_user.cart.id

        if @carts_product.save 
            render :show 
        else 
            render json: @carts_product.errors.full_messages, status: 401
        end
    end

    def update
        @carts_product = CartsProducts.find_by(id: params[:id])

        if @carts_product.update(carts_products_params)
            render :show 
        else  
            render json: @carts_product.errors.full_messages, status: 401
        end
    end

    def destroy 
        @carts_product = CartsProducts.find(params[:id])
        @carts_product.destroy 
        render :show
    end

    private 

    def carts_products_params
        params.require(:cartsProducts).permit(:product_id)
    end
end
