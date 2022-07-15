class UserSerializer < ActiveModel::Serializer
  attributes :id, :actual_name, :username, :password, :image_url

  has_many :user_events
  has_many :comments
end
