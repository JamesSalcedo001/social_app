Rails.application.routes.draw do
  

  resources :comments, only: [:index, :create, :update, :destroy]
  resources :posts, only: [:index, :create]
  resources :users, only: [:show, :create]
  

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
