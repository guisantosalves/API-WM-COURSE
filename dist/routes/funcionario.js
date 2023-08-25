"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FuncionarioRouter = express_1.default.Router();
FuncionarioRouter.get("/funcionario", (req, res) => {
    res.send("funcionario router get");
});
FuncionarioRouter.post("/funcionario", (req, res) => {
    res.send("funcionario router post");
});
FuncionarioRouter.put("/funcionario", (req, res) => {
    res.send("funcionario router put");
});
FuncionarioRouter.delete("/funcionario", (req, res) => {
    res.send("funcionario router delete");
});
exports.default = FuncionarioRouter;
