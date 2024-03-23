const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const ProductoTerminado = sequelize.define("productoterminado", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tpasta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  formato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  presentacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lote: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechavencimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = { ProductoTerminado };
