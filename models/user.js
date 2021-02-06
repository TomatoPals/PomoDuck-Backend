// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      // The email cannot be null, and must be a proper email before creation
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      alias: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      aliasImage: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      displayPref: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 1
      },
      pomTime: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 15
      },
      smallBreakTime: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 5
      },
      bigBreakTime: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 15
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name
    }
  );
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
