Rails.application.routes.draw do
  devise_for :users
  root 'solars#index'
  resources :users, only: [:show] do
    resources :planets
  end
end
