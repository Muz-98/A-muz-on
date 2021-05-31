class Api::PurchasesController < ApplicationController
    before_action :ensure_logged_in, only: [:index, :create, :update, :destroy]

    def index
        if logged_in?
            @purchases = Purchase.all 
        end
    end

    def show
        @purchase = Purchase.find(params[:id])
    end

    def create
  
       @purchase = Purchase.new(purchase_params);
       @purchase.cart_id = current_user.cart.id
       @purchase.product_id = params[:purchase][:product_id]
        

        if @purchase.save!
            
            @cart = Cart.find_by(id: @purchase.cart_id)
            render :show
        else
            render json: @purchase.errors.full_messages, status: 422
        end
    
    end

    def update 
        if logged_in?
            @purchase = Purchase.find(params[:id])
            if @purchase.update(purchase_params)
                render :show
            else
                render json: @purchase.errors.full_messages, status: 422
            end
        end
    end

    def destroy
       debugger 
        if logged_in?
            @purchase = Purchase.find_by(product_id: params[:id])
            if @purchase.destroy
                render :show 
            end
        end
    end

    def clear 
        @purchases = Purchase.all 
        @purchases.destroy_all
    end


    private
    def purchase_params
        params.require(:purchase).permit(:product_id, :quantity)
    end

end