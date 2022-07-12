class FriendSerializer < ActiveModel::Serializer
  attributes :id, :friend_name
  has_one :user
end
