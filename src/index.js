const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const { server } = require('./.env');

const app = express();

app.use(cors());

app.use(express.json());

routes(app);

app.listen(server.port, () => {
  console.log(
    `Backend executado em ${server.host} na porta ${server.port}`
  );
});
