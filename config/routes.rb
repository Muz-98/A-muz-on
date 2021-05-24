Rails.application.routes.draw do
  root to: 'static_pages#root' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    
    get "/products/search", to: "products#search"
    resources :products, only: [:show, :index] do 
      resources :reviews, only: [:create, :index, :show]
    end

    resources :reviews, only: [:destroy, :update]
    resources :purchases, only: [:index, :create, :show, :destroy, :update] do
        delete "clear", on: :collection
      end
  end

end
