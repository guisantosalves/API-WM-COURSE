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
exports.LoginService = void 0;
const funcionario_model_1 = __importDefault(require("../model/funcionario_model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = require("../utils/generateToken");
class LoginService {
    static login(loginDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcLogin = yield funcionario_model_1.default.findOne({ email: loginDTO.email });
            if (funcLogin && loginDTO.senha) {
                // converte a current senha e compara com a do banco
                // senha passa / senha no banco
                const comparingPass = yield bcrypt_1.default.compare(loginDTO.senha, funcLogin.senha);
                if (comparingPass) {
                    // getting the token after all verification
                    const token = (0, generateToken_1.generateToken)(funcLogin.id);
                    const formingLogin = {
                        email: funcLogin.email,
                    };
                    // passing the token to the object returned
                    if (token) {
                        formingLogin.token = token;
                    }
                    else {
                        return undefined;
                    }
                    return formingLogin;
                }
                else {
                    return undefined;
                }
            }
            else {
                return undefined;
            }
        });
    }
}
exports.LoginService = LoginService;
