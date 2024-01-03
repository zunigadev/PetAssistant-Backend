const User = require("./user.model");
const Rol = require("./rol.model");
const Specie = require("./specie.model");
const Pet = require("./pet.model");

//Relación Rol-Usuarios (Uno a muchos)
Rol.hasMany(User, {as: "users", foreignKey:"RolId"})
User.belongsTo(Rol, {as: "roles", foreignKey: "RolId" });

//Relación Pet-Specie (Uno a muchos)
Specie.hasMany(Pet,{as: "pets", foreignKey : "SpeciesId"})
Pet.belongsTo(Specie, {as: 'species', foreignKey:'SpeciesId'});

//Relación User-Pet (Uno a muchos)
User.hasMany(Pet, {as: "prueba", foreignKey:"DuenioID"})
Pet.belongsTo(User, {as: "duenio", foreignKey:"DuenioID"});