"use strict";
<<<<<<< HEAD
=======
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
>>>>>>> 760a85ed0700dc2d03ecd448a15240bad5220171
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
<<<<<<< HEAD
const ClienteRouter = express_1.default.Router();
ClienteRouter.get("/cliente", (req, res) => {
    res.send("cliente router get");
});
ClienteRouter.post("/cliente", (req, res) => {
    //   const body = req.body;
    //   console.log(body);
    res.send("cliente router post");
});
=======
const cliente_1 = require("../controller/cliente");
const ClienteRouter = express_1.default.Router();
ClienteRouter.get("/cliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AllCli = yield cliente_1.ClienteController.getAllCli();
    if (AllCli) {
        res.status(200).send(AllCli);
    }
    else {
        res.sendStatus(404);
    }
}));
ClienteRouter.get("/cliente/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idCliente = req.params.id;
    const getClienteById = yield cliente_1.ClienteController.getCliById(idCliente);
    if (getClienteById) {
        res.status(200).send(getClienteById);
    }
    else {
        res.sendStatus(404);
    }
}));
ClienteRouter.post("/cliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clienteDTO = req.body;
    const createdClient = yield cliente_1.ClienteController.createCli(clienteDTO);
    if (createdClient) {
        res.status(201).send(createdClient);
    }
    else {
        res.sendStatus(400);
    }
}));
>>>>>>> 760a85ed0700dc2d03ecd448a15240bad5220171
ClienteRouter.put("/cliente", (req, res) => {
    res.send("cliente router put");
});
ClienteRouter.delete("/cliente", (req, res) => {
    res.send("cliente router delete");
});
exports.default = ClienteRouter;
