class User < ApplicationRecord
    has_secure_password

    has_many :user_events
    has_many :comments, through: :user_events

    has_many :friendee_friends, foreign_key: "friender_id", class_name: "Friend"
    has_many :friendees, through: :friendee_friends, source: :friendee

    has_many :friender_friends, foreign_key: "friendee_id", class_name: "Friend"
    has_many :frienders, through: :friender_friends, source: :friender
    
    # has_many :follower_follows, foreign_key: :followee_id, class_name: "Follow" 
    # # source: :follower matches with the belong_to :follower identification in the Follow model 
    # has_many :followers, through: :follower_follows, source: :follower
    # # followee_follows "names" the Follow join table for accessing through the followee association
    # has_many :followee_follows, foreign_key: :follower_id, class_name: "Follow"    
    # # source: :followee matches with the belong_to :followee identification in the Follow model   
    # has_many :followees, through: :followee_follows, source: :followee
end
