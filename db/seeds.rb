10.times(User.create!(actual_name: Faker::Name.name, username: Faker::App.name, password: Faker::Alphanumeric.alphanumeric(number: 10)))

# 10.times(Friend.create!(friend_name: Faker::Name.name))

Borough.create!(borough_name: 'Staten Island')
Borough.create!(borough_name: 'Manhattan')
Borough.create!(borough_name: 'Brooklyn')
Borough.create!(borough_name: 'Queens')
Borough.create!(borough_name: 'Bronx')

20.times(EventType.create!(event_type_name: Faker::Esport.event))

FavoriteEvent.create!(user_id: 1)
FavoriteEvent.create!(user_id: 2)
FavoriteEvent.create!(user_id: 3)
FavoriteEvent.create!(user_id: 4)
FavoriteEvent.create!(user_id: 5)
FavoriteEvent.create!(user_id: 6)
FavoriteEvent.create!(user_id: 7)
FavoriteEvent.create!(user_id: 8)
FavoriteEvent.create!(user_id: 9)
FavoriteEvent.create!(user_id: 10)



UserEvent.create!(
    event_id: "620401",
    event_name: "Cricket",
    start_date_time: "2022-07-13T18:00:00.000",
    end_date_time: "2022-07-13T20:00:00.000",
    event_location: "Flushing Meadows Corona Park: Cricket-17",

    borough_id: 1,
    event_type_id: 1,
    user_id: 1
)

UserEvent.create!(
    event_id: "654927",
    event_name: "Basketball",
    start_date_time: "2022-07-18T11:30:00.000",
    end_date_time: "2022-07-18T18:30:00.000",
    event_location: "Annunciation Park: Basketball-01",

    borough_id: 2,
    event_type_id: 2,
    user_id: 2
)

UserEvent.create!(
    event_id: "630338",
    event_name: "Elliott's Gymnastics Classes",
    start_date_time: "2022-07-27T09:00:00.000",
    end_date_time: "2022-07-27T13:00:00.000",
    event_location: "Riverside Park: 79th Street Rotunda-RSP",

    borough_id: 3,
    event_type_id: 3,
    user_id: 3   
)

UserEvent.create!(
    event_id: "615306",
    event_name: "Basketball",
    start_date_time: "2022-07-27T10:00:00.000",
    end_date_time: "2022-07-27T13:00:00.000",
    event_location: "Howard Bennett Playground: Basketball-02",

    borough_id: 4,
    event_type_id: 4,
    user_id: 4
)