class UsermessagesController < ApplicationController

    skip_before_action :authorize
    def index
        usermessages = Usermessage.all
        if usermessages
            render json: usermessages
        else
            render json: { error: "User Message not found"}
        end 
    end

    def create
        # print(params)
        usermessage = Usermessage.create!(message: params[:message], user_id: params[:user_id], like: 0, reply: [])
        render json: usermessage, status: :created
    end

    def update
        # print(params)
        usermessage = Usermessage.find_by(id: params[:id])
        if usermessage 
            usermessage.update(like: usermessage.like + 1)
            render json: usermessage 
        else
            render json: { error: "User Message not found" }, status: :not_found
        end
    end


    def destroy
        usermessage = Usermessage.find_by(id: params[:id])
        if usermessage
            usermessage.destroy
            head :no_content
        else
            render json: { error: "User Message not found" }, status: :not_found
        end
    end

    private

    def usermessage_params
        params.permit(:message, :user_id, :like )
    end

    def increment_likes
        print(params)
        # usermessage = Usermessage.find_by(id: params[:id])
        # if usermessage 
        #     usermessage.update(like: usermessage.like + 1)
        #     render json: usermessage 
        # else
        #     render json: { error: "User Message not found" }, status: :not_found
        # end
    end
    


end
