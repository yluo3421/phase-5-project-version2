class UsermessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :reply, :like, :user_id, :created_at
  belongs_to :user
end
