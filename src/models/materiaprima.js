const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const MateriaPrima = sequelize.define("materiaPrima", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  insumo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medida: {
    type: DataTypes.STRING,
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

module.exports = { MateriaPrima };
