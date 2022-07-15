class CommentsController < ApplicationController
    def update
        puts params
        puts params[:user_event_id]
        #{"text"=>"Show Existing Comments d", "user_event_id"=>6, "controller"=>"comments", "action"=>"update", "id"=>"6", "comment"=>{"user_event_id"=>6}}
        # find_or_create_by
        commentToThisEvent = Comment.find_or_create_by(user_event_id: params[:user_event_id])
        commentToThisEvent.content = params[:content]
        puts commentToThisEvent.content
        #commentToThisEvent.content = params[:text]
        render json: commentToThisEvent
    end


end
