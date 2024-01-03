const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class User extends Model {}

User.init(
    {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.BIGINT(12),
            unique: true,
            allowNull: false,
        },
        date_birth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        dni: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        /*password: {
            type: DataTypes.STRING,
            // Making password non-visible (in SELECT queries)
            allowNull: false,
            visible: false,
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }*/
        },
        {
            sequelize,
            modelName: "User",
        }
    );

module.exports = User;
