# # 10.times{User.create!(actual_name: Faker::Name.name, username: Faker::App.name, password_digest: Faker::IDNumber.invalid)}

# UserEvent.create!(
#     event_id: "620401",
#     event_name: "Cricket",
#     start_date_time: "2022-07-13T18:00:00.000",
#     end_date_time: "2022-07-13T20:00:00.000",
#     event_location: "Flushing Meadows Corona Park: Cricket-17",
#     user_id: 1
# )

# UserEvent.create!(
#     event_id: "654927",
#     event_name: "Basketball",
#     start_date_time: "2022-07-18T11:30:00.000",
#     end_date_time: "2022-07-18T18:30:00.000",
#     event_location: "Annunciation Park: Basketball-01",
#     user_id: 2
# )

# UserEvent.create!(
#     event_id: "630338",
#     event_name: "Elliott's Gymnastics Classes",
#     start_date_time: "2022-07-27T09:00:00.000",
#     end_date_time: "2022-07-27T13:00:00.000",
#     event_location: "Riverside Park: 79th Street Rotunda-RSP",
#     user_id: 3   
# )

# UserEvent.create!(
#     event_id: "615306",
#     event_name: "Basketball",
#     start_date_time: "2022-07-27T10:00:00.000",
#     end_date_time: "2022-07-27T13:00:00.000",
#     event_location: "Howard Bennett Playground: Basketball-02",

#     borough_id: 4,
#     event_type_id: 4,
#     user_id: 4
# )