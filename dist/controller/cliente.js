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
const cliente_1 = require("../service/cliente");
class ClienteController {
    static getAllCli() {
        return __awaiter(this, void 0, void 0, function* () {
            const AllData = yield cliente_1.ClientService.getAllClient();
            if (AllData) {
                return AllData;
            }
            else {
                return null;
            }
        });
    }
    static createCli(objectDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdCliente = yield cliente_1.ClientService.createClient(objectDTO);
            if (createdCliente) {
                return createdCliente;
            }
            else {
                return null;
            }
        });
    }
    static getCliById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteById = yield cliente_1.ClientService.getClientById(id);
            if (clienteById !== null) {
                return clienteById;
            }
            else {
                return null;
            }
        });
    }
}
exports.ClienteController = ClienteController;
