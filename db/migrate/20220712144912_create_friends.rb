class CreateFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.string :friend_name
      t.string :friend_username
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
