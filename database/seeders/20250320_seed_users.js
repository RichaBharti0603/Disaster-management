const { User } = require("../schemas/User");

const seedUsers = async () => {
  await User.bulkCreate([
    { name: "John Doe", email: "john@example.com", password: "hashedpassword1" },
    { name: "Jane Doe", email: "jane@example.com", password: "hashedpassword2" },
  ]);
  console.log("✅ Users seeded successfully");
};

module.exports = seedUsers;
