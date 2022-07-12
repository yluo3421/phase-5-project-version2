class CreateFavoriteEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_events do |t|
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
