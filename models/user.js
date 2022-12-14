const Sequelize = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Must be a valid email address",
      },
    },
  },
  phonenumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
});

module.exports = User;
