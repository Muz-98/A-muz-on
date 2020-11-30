class Api::CartsProductsController < ApplicationController

    def create
        @cartProduct = CartsProducts.find_by(product_id: params[:cartproduct][:product_id])

        if @cartProduct 
            @cartProduct.quantity += 1 
            #  @max_quantity = false
            #         if @cartProduct.quantity > 10
            #             @max_quantity = true
            #             @cartProduct.quantity = 10 # capping quantity to 10
            #         end
        else # create a new shopping cart item
            @cartProduct = CartsProducts.new(cart_params)
        end


        if @cartproduct.save
            render "api/cart/show"
        else
            render json: @cartproduct.errors.full_messages, status: 401
        end
    end

    def update
    end

    def destroy
    end

    private 

    def cart_params
        params.require(:cartproduct).permit(:product_id, :quantity)
    end
end
