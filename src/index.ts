import "dotenv/config";
import express from "express";
import routes from "./routes";

// criando uma instância do express
const app = express();

// configurando json files
app.use(express.json());

// definindo minhas rotas
routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is listening on PORT ${port}`));
