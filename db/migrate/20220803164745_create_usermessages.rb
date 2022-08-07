class CreateUsermessages < ActiveRecord::Migration[6.1]
  def change
    create_table :usermessages do |t|
      t.string :message
      t.integer :reply, array: true, default: []
      t.integer :like
      t.integer :user_id

      t.timestamps
    end
  end
end
