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
exports.ServicoService = void 0;
const servico_model_1 = __importDefault(require("../model/servico_model"));
const funcionario_model_1 = __importDefault(require("../model/funcionario_model"));
const cliente_model_1 = __importDefault(require("../model/cliente_model"));
class ServicoService {
    static getAllService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // o path é literalmente o nome da propertie que vai ser preenchida no objeto
                const allDataService = yield servico_model_1.default.find({}).populate([
                    { path: "cliente" },
                    { path: "funcionario" },
                ]);
                return allDataService;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getServiceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const servicebyid = yield servico_model_1.default.findById(id).populate([
                    { path: "cliente" },
                    { path: "funcionario" },
                ]); // getting one by id
                return servicebyid;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static createService(serviceDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundFunc = yield funcionario_model_1.default.findById(serviceDTO.funcionario);
                if (foundFunc && foundFunc.senha)
                    foundFunc.senha = "";
                const foundClient = yield cliente_model_1.default.findById(serviceDTO.cliente);
                const serviceMapped = new servico_model_1.default({
                    nome: serviceDTO.nome,
                    descricao: serviceDTO.descricao,
                    valor: serviceDTO.valor,
                    tempoServico: serviceDTO.tempoServico,
                    ativo: serviceDTO.ativo,
                    funcionario: foundFunc,
                    cliente: foundClient,
                    status: serviceDTO.status,
                });
                serviceMapped.save();
                return serviceMapped;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static updateService(id, servicoDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatingServico = yield servico_model_1.default.findByIdAndUpdate(id, servicoDTO);
                if (updatingServico) {
                    // getting correct data after updated
                    const updatedServico = yield servico_model_1.default.findById(id);
                    return updatedServico;
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
    static deleteService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedData = yield servico_model_1.default.findOneAndDelete({ _id: id });
                return deletedData;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.ServicoService = ServicoService;
