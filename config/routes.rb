Rails.application.routes.draw do
  devise_for :users
  resources :users do
    put :user_registration_token, on: :collection, as: 'registration_token'
  end
  post '/save_fcm_token', to: 'fcm_tokens#create'
  root to: "home#index"
end
