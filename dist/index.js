"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./repository/db"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./docs/swagger_output.json"));
//estabelecendo conexão com o mongodb
db_1.default.on("error", () => console.log("error em estabelecer conexão"));
db_1.default.once("open", () => {
    console.log("Conexão estabelecida com o banco estabelecida");
});
// criando uma instância do express
const app = (0, express_1.default)();
// cookie parser
app.use((0, cookie_parser_1.default)());
// cors
app.use((0, cors_1.default)({ origin: ["http://localhost:3002", "http://127.0.0.1:3002"] }));
// documentation
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
// definindo minhas rotas
(0, routes_1.default)(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is listening on PORT ${port}`));
