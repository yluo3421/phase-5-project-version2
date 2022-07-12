class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :event_location, :event_name, :start_date_time, :end_date_time
  has_one :borough
  has_one :event_type
end
