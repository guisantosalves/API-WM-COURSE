"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
<<<<<<< HEAD
// criando uma instância do express
const app = (0, express_1.default)();
// configurando json files
app.use(express_1.default.json());
=======
const db_1 = __importDefault(require("./repository/db"));
//estabelecendo conexão com o mongodb
db_1.default.on("error", () => console.log("error em estabelecer conexão"));
db_1.default.once("open", () => {
    console.log("Conexão estabelecida com o banco estabelecida");
});
// criando uma instância do express
const app = (0, express_1.default)();
>>>>>>> 760a85ed0700dc2d03ecd448a15240bad5220171
// definindo minhas rotas
(0, routes_1.default)(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is listening on PORT ${port}`));
