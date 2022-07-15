class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :event_location, :event_name, :start_date_time, :end_date_time, :event_borough, :event_type

  belongs_to :user
  has_many :comments
end
