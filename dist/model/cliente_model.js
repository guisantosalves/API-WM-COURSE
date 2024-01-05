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
const clienteSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    rua: { type: String, required: true },
    obs: { type: String, required: false },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    foto: { type: String, required: false },
    ativo: { type: Boolean, default: true },
}, { versionKey: false });
const Cliente = mongoose_1.default.model("clientes", clienteSchema);
exports.default = Cliente;
