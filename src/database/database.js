const Sequelize = require("sequelize");
// const { URL_BD } = process.env;
const { DB_DEPLOY } = process.env;
const sequelize = new Sequelize(
  DB_DEPLOY
  /* "postgres://postgres:123456@localhost:5432/qoriapp"*/
);

module.exports = sequelize;
