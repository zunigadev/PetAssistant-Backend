const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Rol extends Model {}

Rol.init({
    rol_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
    },
    rol_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
},{
    sequelize,
    modelName: "Rol",
});

module.exports = Rol;