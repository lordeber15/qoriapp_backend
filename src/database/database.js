const Sequelize = require("sequelize");
const { DB_DEPLOY } = process.env;
console.log(DB_DEPLOY);
const sequelize = new Sequelize(
  "postgres://qoriapp_user:rXle6FdEvdFUNTM4yP6UeHxHRU90q2A8@dpg-cnl5r7gl6cac73edb7cg-a.oregon-postgres.render.com/qoriapp",
  { dialect: "postgres" }
  /* "postgres://postgres:123456@localhost:5432/qoriapp"*/
);

module.exports = sequelize;
