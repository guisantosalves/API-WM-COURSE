"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (id) => {
    const jwtSecretkey = process.env.JWT_SECRET_KEY;
    const dataToAssign = {
        id: id,
    };
    if (dataToAssign.id && jwtSecretkey) {
        const token = jsonwebtoken_1.default.sign(dataToAssign, jwtSecretkey);
        return token;
    }
    else {
        return undefined;
    }
};
exports.generateToken = generateToken;
