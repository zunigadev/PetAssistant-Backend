const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");


class Specie extends Model{}

Specie.init({
    spec_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true
    },
    spec_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    sequelize,
    modelName: "Specie",
});

module.exports = Specie;