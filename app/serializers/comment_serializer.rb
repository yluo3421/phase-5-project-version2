class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_event_id, :content

  belongs_to :user_event
end
