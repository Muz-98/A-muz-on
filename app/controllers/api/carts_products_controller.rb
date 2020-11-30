class Api::CartsProductsController < ApplicationController

    def create
        @cartProduct = CartsProducts.find_by(product_id: params[:cartproduct][:product_id])

        if @cartProduct 
            @cartProduct.quantity += 1 
        else 
            @cartProduct = CartsProducts.new(cart_params)
        end

        if @cartproduct.save
            render "api/cart/show"
        else
            render json: @cartproduct.errors.full_messages, status: 422
        end
    end

    def update
        @cartProduct = ShoppingCartItem.find_by(id: params[:id])
        if @cartProduct.update(cart_params)
            render "api/cart/show"
        else
            render json: @cartProduct.errors.full_messages, status: 422
        end
    end

    def destroy
    end

    private 
    def cart_params
        params.require(:cartproduct).permit(:product_id, :quantity)
    end
end
