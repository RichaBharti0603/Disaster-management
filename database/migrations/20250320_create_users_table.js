module.exports = {
    up: async ({ context: queryInterface }) => {
      await queryInterface.createTable("Users", {
        id: { type: "UUID", primaryKey: true, defaultValue: "UUID_GENERATE_V4()" },
        name: { type: "STRING", allowNull: false },
        email: { type: "STRING", allowNull: false, unique: true },
        password: { type: "STRING", allowNull: false },
        createdAt: { type: "DATE", allowNull: false, defaultValue: "NOW()" },
        updatedAt: { type: "DATE", allowNull: false, defaultValue: "NOW()" },
      });
    },
    down: async ({ context: queryInterface }) => {
      await queryInterface.dropTable("Users");
    },
  };
  