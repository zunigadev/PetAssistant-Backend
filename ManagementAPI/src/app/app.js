const express = require('express');
const app = express();
const morgan = require('morgan');

//User
const routerUser = require("../routers/router")

//Midlewere
app.use(morgan("dev"))
app.use(express.json())

//Ruta Principal-Raiz
app.get("/", (req, res) => {
    res.send("This is dssdsdsds");
});

//RutaUser
app.use(express.json())
app.use("/api/v1", routerUser)

module.exports = app;