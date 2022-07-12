# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_12_153737) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boroughs", force: :cascade do |t|
    t.string "borough_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "event_types", force: :cascade do |t|
    t.string "event_type_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "favorite_events", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_favorite_events_on_user_id"
  end

  create_table "friends", force: :cascade do |t|
    t.string "friend_name"
    t.string "friend_username"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_friends_on_user_id"
  end

  create_table "user_events", force: :cascade do |t|
    t.integer "event_id"
    t.string "event_location"
    t.string "event_name"
    t.string "start_date_time"
    t.string "end_date_time"
    t.bigint "borough_id", null: false
    t.bigint "event_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["borough_id"], name: "index_user_events_on_borough_id"
    t.index ["event_type_id"], name: "index_user_events_on_event_type_id"
    t.index ["user_id"], name: "index_user_events_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "actual_name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "favorite_events", "users"
  add_foreign_key "friends", "users"
  add_foreign_key "user_events", "boroughs"
  add_foreign_key "user_events", "event_types"
  add_foreign_key "user_events", "users"
end
