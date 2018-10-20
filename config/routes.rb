Rails.application.routes.draw do
  root to: 'site#index'
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create, :destroy, :update]
      resources :authors, only: [:index, :create, :destroy, :update]
    end
  end

  get '/authors/:id', to: 'api/v1/authors#show', as: :author
  get '/search_authors', to: 'api/v1/authors#search_authors', as: :search_authors
end
