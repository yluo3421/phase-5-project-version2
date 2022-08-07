puts "seeding started"

5.times{User.create!(
    actual_name: Faker::Name.name, 
    username: Faker::App.name, 
    password_digest: Faker::IDNumber.invalid,
    image_url: Faker::Avatar.image
)}



Usermessage.create!(
    message: "organize the world's information and make it universally accessible and useful",
    reply: [2,3],
    like: 0,
    user_id: 1
)

Usermessage.create!(
    message: "Raise",
    reply: [],
    like: 0,
    user_id: 2
)


puts "seeding done"