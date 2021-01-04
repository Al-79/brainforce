Rails.application.routes.draw do
  resources :books
  resources :concentrations, only: :show
  resources :wordbook, only: :show
  devise_for :users
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#new_guest'
  end
  root to: 'fronts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
