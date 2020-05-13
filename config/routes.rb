Rails.application.routes.draw do
  root to: 'schedules#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :schedules, only: [:create]
  end
end
