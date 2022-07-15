class CommentsController < ApplicationController

    def update
        comment = Comment.find(params[:id])
        comment.update(content: params[:content])
        render json: comment
    end

    def create
        comment = Comment.create(content: params[:content] , user_event_id: params[:user_event_id])
    end

    private

    def comment_params
        # params.permit(:content, :user_event_id)
    end

end
