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
exports.ClientService = void 0;
const cliente_1 = __importDefault(require("../model/cliente"));
class ClientService {
    static getAllClient() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const AllClientes = yield cliente_1.default.find({});
                return AllClientes;
            }
            catch (err) {
                throw new Error("Server can not find clients");
            }
        });
    }
    static createClient(objectDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new cliente_1.default({
                nome: objectDTO.nome,
                dataNascimento: objectDTO.dataNascimento,
                rua: objectDTO.rua,
                obs: objectDTO.obs,
                bairro: objectDTO.bairro,
                cep: objectDTO.cep,
                foto: objectDTO.foto,
                ativo: objectDTO.ativo,
            });
            const clienteSaved = yield client.save();
            if (clienteSaved) {
                return clienteSaved;
            }
            else {
                throw new Error("Impossible to create client");
            }
        });
    }
    static getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientFromDbById = yield cliente_1.default.findById(id);
                return clientFromDbById;
            }
            catch (err) {
                throw new Error("Impossible to find client by id: " + id);
            }
        });
    }
}
exports.ClientService = ClientService;
