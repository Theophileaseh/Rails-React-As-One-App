Rails.application.routes.draw do
  root 'messages#index'
  resources :messages

  namespace :api do
    namespace :v1 do
      resource :messages
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
