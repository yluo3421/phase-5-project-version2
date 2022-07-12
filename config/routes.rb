Rails.application.routes.draw do
  
  resources :favorite_events
  resources :user_events
  resources :friends
  resources :users
  resources :event_types
  resources :boroughs
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
