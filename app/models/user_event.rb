class UserEvent < ApplicationRecord
  belongs_to :borough
  belongs_to :event_type
end
