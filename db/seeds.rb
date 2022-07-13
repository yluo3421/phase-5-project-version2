puts "seeding started"

5.times{User.create!(
    actual_name: Faker::Name.name, 
    username: Faker::App.name, 
    password_digest: Faker::IDNumber.invalid,
    image_url: Faker::Avatar.image
)}

UserEvent.create!(
    event_id: "620401",
    event_name: "Cricket",
    start_date_time: "2022-07-13T18:00:00.000",
    end_date_time: "2022-07-13T20:00:00.000",
    event_location: "Flushing Meadows Corona Park: Cricket-17",
    event_type: "Sport - Youth",
    event_borough: "Queens",
    user_id: 1
)

UserEvent.create!(
    event_id: "654927",
    event_name: "Basketball",
    start_date_time: "2022-07-18T11:30:00.000",
    end_date_time: "2022-07-18T18:30:00.000",
    event_location: "Annunciation Park: Basketball-01",
    event_type: "Sport - Youth",
    event_borough: "Manhattan",
    user_id: 2
)

UserEvent.create!(
    event_id: "630338",
    event_name: "Elliott's Gymnastics Classes",
    start_date_time: "2022-07-27T09:00:00.000",
    end_date_time: "2022-07-27T13:00:00.000",
    event_type: "Special Event",
    event_borough: "Manhattan",
    event_location: "Riverside Park: 79th Street Rotunda-RSP",
    user_id: 3   
)

UserEvent.create!(
    event_id: "615306",
    event_name: "Basketball",
    start_date_time: "2022-07-27T10:00:00.000",
    end_date_time: "2022-07-27T13:00:00.000",
    event_location: "Howard Bennett Playground: Basketball-02",
    event_type: "Sport - Youth",
    event_borough: "Manhattan",
    user_id: 4
)

UserEvent.create!(
    event_id: "654187",
    event_name: "Basketball",
    start_date_time: "2022-07-15T11:00:00.000",
    end_date_time: "2022-07-15T20:00:00.000",
    event_type: "Sport - Youth",
    event_borough: "Manhattan",
    event_location: "Brigadier General Charles Young Playground: Lenox Ave-Basketball-01 ,Courtney Callender Playground: Basketball-01",
    user_id: 5
)

Comment.create!(content: Faker::Lorem.sentence, user_event_id: 1)
Comment.create!(content: Faker::Lorem.sentence, user_event_id: 2)
Comment.create!(content: Faker::Lorem.sentence, user_event_id: 3)
Comment.create!(content: Faker::Lorem.sentence, user_event_id: 4)
Comment.create!(content: Faker::Lorem.sentence, user_event_id: 5)

Friend.create!(friender_id: 1, friendee_id: 2)
Friend.create!(friender_id: 1, friendee_id: 3)

Friend.create!(friender_id: 2, friendee_id: 4)
Friend.create!(friender_id: 2, friendee_id: 3)

puts "seeding done"