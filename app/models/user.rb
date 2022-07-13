class User < ApplicationRecord
    has_many :user_events
    has_many :comments, through: :user_events

    has_many :friendee, foreign_key: :friendee_id, class_name: "User"
    has_many :friender, through: :friendee, source: :user

    has_many :friender, foreign_key: :friender_id, class_name: "User"
    has_many :friendee, through: :friender, source: :user
end
