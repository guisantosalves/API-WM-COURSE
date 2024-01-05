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
const cliente_model_1 = __importDefault(require("../model/cliente_model"));
class ClientService {
    static getAllClient() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const AllClientes = yield cliente_model_1.default.find({});
                return AllClientes;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static createClient(objectDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = new cliente_model_1.default({
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
                return clienteSaved;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientFromDbById = yield cliente_model_1.default.findById(id);
                return clientFromDbById;
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    static updateClient(id, clienteDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // updating
                const client = yield cliente_model_1.default.findByIdAndUpdate(id, clienteDTO);
                if (client) {
                    // getting updated data
                    const updatedClient = yield cliente_model_1.default.findById(id);
                    return updatedClient;
                }
                else {
                    return undefined;
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /**
                  This function differs slightly from Model.findOneAndRemove()
                  in that findOneAndRemove() becomes a MongoDB findAndModify() command,
                  as opposed to a findOneAndDelete() command.
                  For most mongoose use cases, this distinction is purely pedantic.
                  You should use findOneAndDelete() unless you have a good reason not to.
                 */
                const clientDeleted = yield cliente_model_1.default.findOneAndDelete({ _id: id });
                return clientDeleted;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.ClientService = ClientService;
