class CommentsController < ApplicationController

    def update
        # event = UserEvent.find(params[:id])
        # puts event
        comment = Comment.find(params[:id])
        # puts comment.content
        # comment.update(comment_params)
        comment.update(content: params[:content])
        # puts params
        # byebug
        render json: comment
    end

    private

    def comment_params
        # params.permit(:content, :user_event_id)
    end

end
