Rails.application.routes.draw do
  root to: 'site#index'
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create, :destroy, :update]
      resources :authors
    end
  end
end
