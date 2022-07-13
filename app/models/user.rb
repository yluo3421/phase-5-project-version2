class User < ApplicationRecord
    has_secure_password

    validates :username, presence, true
    validates :password, presence, true

    has_many :user_events
    has_many :comments, through: :user_events

    has_many :friendee_friends, foreign_key: "friender_id", class_name: "Friend"
    has_many :friendees, through: :friendee_friends, source: :friendee

    has_many :friender_friends, foreign_key: "friendee_id", class_name: "Friend"
    has_many :frienders, through: :friender_friends, source: :friender
    
end
