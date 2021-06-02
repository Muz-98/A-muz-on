class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, except: [:index]

    def index 
        if params[:product_id]
            @reviews = Review.where(product_id: params[:product_id])

        else
            @reviews = Review.all
        end
        render :index
    end
    
    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.product_id = params[:review][:product_id]
        
        if @review.save!
            # @product = Product.find_by(id: params[:review][:product_id])
            @reviews = Review.all 
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show 
        else
            render @review.errors.full_messages, status: 422
        end
    end
    
    def destroy
    #    debugger 
        @review = current_user.authored_reviews.find(params[:id]).destroy
        # @product = Product.find_by(title: params[:review][:product])
        render :show 
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :rating, :product_id)
    end
end