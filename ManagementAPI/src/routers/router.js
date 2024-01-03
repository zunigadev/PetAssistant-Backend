const router = require("express").Router();
const { faker } = require("@faker-js/faker");
//Llamado a Modelos
const Users = require("../model/user.model");
const Roles = require("../model/rol.model");
const Species = require("../model/specie.model");
const Pets = require("../model/pet.model");
require("../model/asociations");

/*-------------Rutas de Usuario-----------------*/
//Get All
router.get("/user", async (req, res) => {
    const users = await Users.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: users,
    });
});

//Get ID
router.get("/user/:user_id", async (req, res) => {
    const id = req.params.user_id;
    const user = await Users.findOne({
        where: {
            user_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: user,
    });
});

//Post
router.post("/user", async (req, res) => {
    const dataUsers = req.body;

    try {
        await Users.sync();

        const createUser = await Users.create({
            user_name: dataUsers.user_name,
            last_name: dataUsers.last_name,
            phone_number: dataUsers.phone_number,
            date_birth: dataUsers.date_birth,
            dni: dataUsers.dni,
            RolId: dataUsers.RolId,
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created User",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            status: 500,
            message: "Internal Server Error",
        });
    }
});

//Put
router.put("/user", (req, res) => {
    res.send("RuterUser")
});

//Delete
router.delete("/user", (req, res) => {
    res.send("RuterUser")
});

/*-------------Rutas de Mascota-----------------*/
//Get All
router.get("/pet", async (req, res) => {
    const pets = await Pets.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: pets,
    });
});

//Get ID
router.get("/pet/:pet_id", async (req, res) => {
    const id = req.params.pet_id;
    const pet = await Pets.findOne({
        where: {
            pet_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: pet,
    });
});

//Post
router.post("/pet", async (req, res) => {
    const dataPets = req.body;

    try {
        await Pets.sync();

        const createPet = await Pets.create({
            pet_name: dataPets.pet_name,
            size: dataPets.size,
            pet_date: dataPets.pet_date,
            features: dataPets.features,
            SpeciesId: dataPets.SpeciesId,
            DuenioID: dataPets.DuenioID
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Pet created successfully",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            status: 500,
            message: "Internal Server Error",
        });
    }
});

/*-------------Rutas de Roles-----------------*/
//Get All
router.get("/rol", async (req, res) => {
    const roles = await Roles.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: roles,
    });
});

//Post
router.post("/rol", async (req, res) => {
    const dataRoles = req.body;

    try {
        await Roles.sync();

        const createRol = await Roles.create({
            rol_name: dataRoles.rol_name
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created User",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            status: 500,
            message: "Internal Server Error",
        });
    }
});

/*-------------Rutas de Especies-----------------*/
//Get All
router.get("/specie", async (req, res) => {
    const species = await Species.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: species,
    });
});

//Post
router.post("/specie", async (req, res) => {
    const dataSpecies = req.body;

    try {
        await Species.sync();

        const createSpecie = await Species.create({
            spec_name: dataSpecies.spec_name
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: "Created Specie",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            status: 500,
            message: "Internal Server Error",
        });
    }
});


module.exports = router;