class UserEventsController < ApplicationController
    
    def show_events
        # byebug
        events = UserEvent.find_by(user_id: params[:id])
        render json: events, status: :ok
    end
    


    def index
    end

    def create
        byebug
    end

    def update
        byebug
    end

    def destroy
        byebug
    end

end
