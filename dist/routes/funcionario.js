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
const funcionario_controller_1 = require("../controller/funcionario_controller");
const authentication_1 = require("../middleware/authentication");
const FuncionarioRouter = express_1.default.Router();
FuncionarioRouter.get("/funcionario", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AllFnc = yield funcionario_controller_1.FuncionarioController.getAllFnc();
    if (AllFnc) {
        res.status(200).send(AllFnc);
    }
    else {
        res.sendStatus(404);
    }
}));
FuncionarioRouter.post("/funcionario", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const FuncionarioDTO = req.body;
    const savedFnc = yield funcionario_controller_1.FuncionarioController.createFnc(FuncionarioDTO);
    if (savedFnc) {
        res.status(201).send(savedFnc);
    }
    else {
        res.sendStatus(400);
    }
}));
FuncionarioRouter.get("/funcionario/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idFuncionario = req.params.id;
    const fncFromDb = yield funcionario_controller_1.FuncionarioController.getFncById(idFuncionario);
    if (fncFromDb) {
        res.status(200).send(fncFromDb);
    }
    else {
        res.sendStatus(404);
    }
}));
FuncionarioRouter.put("/funcionario/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idToUpdate = req.params.id;
    const FuncionarioDTO = req.body;
    const updatedCliente = yield funcionario_controller_1.FuncionarioController.updateFnc(idToUpdate, FuncionarioDTO);
    if (updatedCliente) {
        res.status(200).send(updatedCliente);
    }
    else {
        res.sendStatus(400);
    }
}));
FuncionarioRouter.delete("/funcionario/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idToDelete = req.params.id;
    const deletedClient = yield funcionario_controller_1.FuncionarioController.deleteFnc(idToDelete);
    if (deletedClient) {
        res.status(200).send(deletedClient);
    }
    else {
        res.sendStatus(400);
    }
}));
exports.default = FuncionarioRouter;
