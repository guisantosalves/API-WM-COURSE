import "dotenv/config";
import express from "express";
import routes from "./routes";
import db from "./repository/db";

//estabelecendo conexão com o mongodb
db.on("error", () => console.log("error em estabelecer conexão"));
db.once("open", () => {
  console.log("Conexão estabelecida com o banco estabelecida");
});

// criando uma instância do express
const app = express();

// definindo minhas rotas
routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is listening on PORT ${port}`));
