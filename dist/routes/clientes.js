"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClienteRouter = express_1.default.Router();
ClienteRouter.get("/cliente", (req, res) => {
    res.send("cliente router get");
});
ClienteRouter.post("/cliente", (req, res) => {
    //   const body = req.body;
    //   console.log(body);
    res.send("cliente router post");
});
ClienteRouter.put("/cliente", (req, res) => {
    res.send("cliente router put");
});
ClienteRouter.delete("/cliente", (req, res) => {
    res.send("cliente router delete");
});
exports.default = ClienteRouter;
