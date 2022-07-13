class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :actual_name
      t.string :image_url
      t.string :password_digest
      t.string :username

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
