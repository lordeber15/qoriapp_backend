const Sequelize = require("sequelize");
// const { URL_BD } = process.env;

const sequelize = new Sequelize(
  "postgres://koyeb-adm:mE2bsjR8SfVJ@ep-purple-rain-a48f5enm.us-east-1.pg.koyeb.app/koyebdb"
  /* "postgres://postgres:123456@localhost:5432/qoriapp"*/
);

module.exports = sequelize;
