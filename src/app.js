const express = require("express");
const emaqueRoutes = require("./routes/empaque.routes");
const materiaprimaRoutes = require("./routes/materiaprima.routes");
const productoterminadoRoutes = require("./routes/productoterminado.routes");
const limpieza = require("./routes/limpieza.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(emaqueRoutes);
app.use(materiaprimaRoutes);
app.use(productoterminadoRoutes);
app.use(limpieza);

module.exports = app;
