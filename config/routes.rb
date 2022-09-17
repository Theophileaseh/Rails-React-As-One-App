Rails.application.routes.draw do

  root 'messages#index'
  
  namespace :api do
    namespace :v1 do
      get 'messages/index'
    end
  end
  resources :messages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
