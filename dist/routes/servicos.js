"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ServicosRouter = express_1.default.Router();
ServicosRouter.get("/servicos", (req, res) => {
    res.send("servicos router get");
});
ServicosRouter.post("/servicos", (req, res) => {
    res.send("servicos router post");
});
ServicosRouter.put("/servicos", (req, res) => {
    res.send("servicos router put");
});
ServicosRouter.delete("/servicos", (req, res) => {
    res.send("servicos router delete");
});
exports.default = ServicosRouter;
