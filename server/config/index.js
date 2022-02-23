//Configuración para solucionar error de CORS policy
const cors = require("cors");

module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(cors({ origin: "http://localhost:3000" }));
};
