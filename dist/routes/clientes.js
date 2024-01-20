"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_controller_1 = require("../controller/cliente_controller");
const authentication_1 = require("../middleware/authentication");
const ClienteRouter = express_1.default.Router();
ClienteRouter.get("/cliente", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AllCli = yield cliente_controller_1.ClienteController.getAllCli();
    if (AllCli) {
        res.status(200).send(AllCli);
    }
    else {
        res.sendStatus(404);
    }
}));
ClienteRouter.get("/cliente/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idCliente = req.params.id;
    const getClienteById = yield cliente_controller_1.ClienteController.getCliById(idCliente);
    if (getClienteById) {
        res.status(200).send(getClienteById);
    }
    else {
        res.sendStatus(404);
    }
}));
ClienteRouter.post("/cliente", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clienteDTO = req.body;
    const createdClient = yield cliente_controller_1.ClienteController.createCli(clienteDTO);
    if (createdClient) {
        res.status(201).send(createdClient);
    }
    else {
        res.sendStatus(400);
    }
}));
ClienteRouter.put("/cliente/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idToUpdate = req.params.id;
    const clienteDTO = req.body;
    const updatedCliente = yield cliente_controller_1.ClienteController.updateCli(idToUpdate, clienteDTO);
    if (updatedCliente) {
        res.status(200).send(updatedCliente);
    }
    else {
        res.sendStatus(400);
    }
}));
ClienteRouter.delete("/cliente/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idToDelete = req.params.id;
    const deletedClient = yield cliente_controller_1.ClienteController.deleteCli(idToDelete);
    if (deletedClient) {
        res.status(200).send(deletedClient);
    }
    else {
        res.sendStatus(400);
    }
}));
exports.default = ClienteRouter;
