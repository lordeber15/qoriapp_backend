const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Empaque = sequelize.define("empaque", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  empaque: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medida: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inicial: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  ingreso: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  salida: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = { Empaque };
