class UserEventsController < ApplicationController

# rescue_from ActiveRecord::RecordInvalid, with: :event_invalid

    
    def show_events
        user = User.find(params[:id])
        if user
            render json: user.user_events
        else
            render json: {message: "User not found"}
        end
    end
    


    def index
    end

    def create
        # byebug
        # pp event_params 
        new_event = UserEvent.create!(event_params)
        render json: new_event, status: :created
    end

    def update
        byebug
    end

    def destroy
        byebug
    end


    private
    
    def event_params

        params.permit(
            :event_id ,
            :event_location,
            :event_name,
            :start_date_time,
            :end_date_time,
            :event_borough,
            :event_type,
            :user_id
        )

        # params[:event].permit(
        #     :event_id ,
        #     :event_location,
        #     :event_name,
        #     :start_date_time,
        #     :end_date_time,
        #     :event_borough,
        #     :event_type,
        #     :user_id
        # )

        # eventP.permit([
        #     :event_id ,
        #     :event_location,
        #     :event_name,
        #     :start_date_time,
        #     :end_date_time,
        #     :event_borough,
        #     :event_type,
        #     :user_id
        # ])

        # eventP.fetch(
        #     :event_id ,
        #     :event_location,
        #     :event_name,
        #     :start_date_time,
        #     :end_date_time,
        #     :event_borough,
        #     :event_type,
        #     :user_id
        # )

    end

    # def event_invalid
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end

end
