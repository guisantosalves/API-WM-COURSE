"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("debug", true);
/**
 * The versionKey is a property set on each document when first created by Mongoose.
 * This keys value contains the internal revision of the document.
 * The name of this document property is configurable. The default is __v
 */
const funcionarioSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    dataAdmisao: { type: Date, required: false, default: Date.now },
    dataDemisao: { type: Date, required: false },
    obsDemisao: { type: String, required: false },
    rua: { type: String, required: true },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    foto: { type: String, required: false },
    ativo: { type: Boolean, required: false, default: false },
    salario: { type: Number, required: true },
    admin: { type: Boolean, required: false, default: false },
}, { versionKey: false });
const Funcionario = mongoose_1.default.model("funcionarios", funcionarioSchema);
exports.default = Funcionario;
