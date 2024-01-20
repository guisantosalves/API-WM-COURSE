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
exports.FuncionarioService = void 0;
const funcionario_model_1 = __importDefault(require("../model/funcionario_model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class FuncionarioService {
    static getAllFunc() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const AllFunc = yield funcionario_model_1.default.find({});
                return AllFunc;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static createFunc(funcionarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verifyingByEmail = yield funcionario_model_1.default.findOne({
                    email: funcionarioDTO.email,
                });
                if (verifyingByEmail)
                    return undefined; // we cant have two same emails into the db
                const passHash = yield bcrypt_1.default.hash(funcionarioDTO.senha, 10); // making the hash
                const funcionarioEntity = new funcionario_model_1.default({
                    nome: funcionarioDTO.nome,
                    email: funcionarioDTO.email,
                    senha: passHash,
                    dataNascimento: funcionarioDTO.dataNascimento,
                    dataAdmisao: funcionarioDTO.dataAdmisao,
                    dataDemisao: funcionarioDTO.dataDemisao,
                    obsDemisao: funcionarioDTO.obsDemisao,
                    rua: funcionarioDTO.rua,
                    bairro: funcionarioDTO.bairro,
                    cep: funcionarioDTO.cep,
                    foto: funcionarioDTO.foto,
                    ativo: funcionarioDTO.ativo,
                    salario: funcionarioDTO.salario,
                    admin: funcionarioDTO.admin,
                });
                const funcionarioSaved = yield funcionarioEntity.save();
                return funcionarioSaved;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getFuncById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const funcFromDbByid = yield funcionario_model_1.default.findById(id);
                if (funcFromDbByid && funcFromDbByid.senha) {
                    funcFromDbByid.senha = "";
                }
                return funcFromDbByid;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static updateFunc(id, funcionarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // verify email
                if (funcionarioDTO.email) {
                    const verifyEmail = yield funcionario_model_1.default.findOne({
                        email: funcionarioDTO.email,
                    });
                    if ((verifyEmail === null || verifyEmail === void 0 ? void 0 : verifyEmail._id) != id) {
                        return undefined; // exist in another doc
                    }
                }
                if (funcionarioDTO.senha) {
                    const changingPass = yield bcrypt_1.default.hash(funcionarioDTO.senha, 10);
                    funcionarioDTO.senha = changingPass; // overwrite the pass
                }
                const updatingFunc = yield funcionario_model_1.default.findByIdAndUpdate(id, funcionarioDTO);
                if (updatingFunc) {
                    const updatedFunc = yield funcionario_model_1.default.findById(id);
                    return updatedFunc;
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
    static deleteFunc(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const funcDeleted = yield funcionario_model_1.default.findOneAndDelete({ _id: id });
                return funcDeleted;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.FuncionarioService = FuncionarioService;
