const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Pet extends Model{};

Pet.init({
    pet_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true
    },
    pet_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    /*active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },*/
    size: {
        type: DataTypes.ENUM('S', 'M', 'G'),
        allowNull: false
    },
    pet_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    features: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    sequelize,
    modelName: "Pet",
});

module.exports = Pet;