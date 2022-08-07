Rails.application.routes.draw do

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # get "/my-events/:id", to: "user_events#show_events"
  # post "/new-event", to: "user_events#create"
  # patch "/update-my-event/:id", to: "user_events#update"
  # delete "/delete-my-event/:id", to: "user_events#destroy"

  resources :usermessages, only: [:index, :update, :create, :destroy]
  # post "/create-usermessages", to: "usermessage#update"
  # patch "/usermessages/:id/like", to: "usermessages#increment_likes"
  # delete "/delete-usermessages/:id", to: "usermessage#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
