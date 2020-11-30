Rails.application.routes.draw do
  root to: 'static_pages#root' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    
    get "/products/search", to: "products#search"
    resources :products, only: [:show, :index]

    resource :cart, only: [:show]
    resource :cartsproducts, only: [:create, :update, :destroy]
  end
  
  # resources :products, only: [:show]
  # resources
end
