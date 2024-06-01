import "dotenv/config";
import express from "express";
import routes from "./routes";
import db from "./repository/db";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUI from "swagger-ui-express";
import swaggerDoc from "./docs/swagger_output.json";

//estabelecendo conexão com o mongodb
db.on("error", () => console.log("error em estabelecer conexão"));
db.once("open", () => {
  console.log("Conexão estabelecida com o banco estabelecida");
});

// criando uma instância do express
const app = express();

// cookie parser
app.use(cookieParser());

// cors
app.use(cors({ origin: ["http://localhost:3002", "http://127.0.0.1:3002"] }));

// documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// definindo minhas rotas
routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is listening on PORT ${port}`));
