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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const cliente_service_1 = require("../service/cliente_service");
class ClienteController {
    static getAllCli() {
        return __awaiter(this, void 0, void 0, function* () {
            const AllData = yield cliente_service_1.ClientService.getAllClient();
            return AllData;
        });
    }
    static createCli(objectDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdCliente = yield cliente_service_1.ClientService.createClient(objectDTO);
            return createdCliente;
        });
    }
    static getCliById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteById = yield cliente_service_1.ClientService.getClientById(id);
            return clienteById;
        });
    }
    static updateCli(id, clienteDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliUpdated = yield cliente_service_1.ClientService.updateClient(id, clienteDTO);
            return cliUpdated;
        });
    }
    static deleteCli(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const CliDeleted = yield cliente_service_1.ClientService.deleteClient(id);
            return CliDeleted;
        });
    }
}
exports.ClienteController = ClienteController;
