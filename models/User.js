const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const UUID = require('UUID');
const bcrypt = require('bcrypt');

class User extends Model {
    // Method to check password on login
    checkPassword(loginPw)  {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Define the User model
// Contains id, username, and password
User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        hooks: {
            // Hook to hash password before creating a new user
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
