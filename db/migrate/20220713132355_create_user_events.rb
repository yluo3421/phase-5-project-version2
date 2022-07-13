class CreateUserEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :user_events do |t|
      t.integer :event_id
      t.string :event_location
      t.string :event_name
      t.string :start_date_time
      t.string :end_date_time
      t.string :event_borough
      t.string :event_type
      t.integer :user_id

      t.timestamps
    end
  end
end
