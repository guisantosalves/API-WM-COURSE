"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_1 = __importDefault(require("./clientes"));
const funcionario_1 = __importDefault(require("./funcionario"));
const servicos_1 = __importDefault(require("./servicos"));
const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({ message: "That is the api for wm barros course" });
    });
    app.use(express_1.default.json(), clientes_1.default, funcionario_1.default, servicos_1.default);
};
exports.default = routes;
