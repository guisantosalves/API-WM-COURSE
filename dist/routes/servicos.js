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
const servico_controller_1 = require("../controller/servico_controller");
const authentication_1 = require("../middleware/authentication");
const ServicosRouter = express_1.default.Router();
ServicosRouter.get("/servicos", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allServicos = yield servico_controller_1.ServicoController.getAllSvc();
    if (allServicos) {
        res.status(200).send(allServicos);
    }
    else {
        res.sendStatus(404);
    }
}));
ServicosRouter.get("/servicos/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const servicosById = yield servico_controller_1.ServicoController.getSvcById(id);
    if (servicosById) {
        res.status(200).send(servicosById);
    }
    else {
        res.sendStatus(404);
    }
}));
ServicosRouter.post("/servicos", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceDTO = req.body;
    const savedService = yield servico_controller_1.ServicoController.createSvc(serviceDTO);
    if (savedService) {
        res.status(201).send(savedService);
    }
    else {
        res.sendStatus(400);
    }
}));
ServicosRouter.put("/servicos/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const serviceDTO = req.body;
    const updatedService = yield servico_controller_1.ServicoController.updateSvc(id, serviceDTO);
    if (updatedService) {
        res.status(200).send(updatedService);
    }
    else {
        res.sendStatus(400);
    }
}));
ServicosRouter.delete("/servicos/:id", authentication_1.authToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deletedService = yield servico_controller_1.ServicoController.deleteSvc(id);
    if (deletedService) {
        res.status(200).send(deletedService);
    }
    else {
        res.sendStatus(400);
    }
}));
exports.default = ServicosRouter;
