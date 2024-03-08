const app = require("./src/app");
const sequelize = require("./src/database/database");
const port = process.env.DB_PORT || 3000;

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("ya estassssss");
    app.listen(port, () => {
      console.log("listening on port", port);
    });
  } catch (error) {
    console.error("nooooo la cagaste", error);
  }
}

main();
