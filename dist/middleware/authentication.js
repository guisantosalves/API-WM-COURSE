"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authToken = (req, res, next) => {
    var _a;
    if (process.env.TOKEN_HEADER_KEY && process.env.JWT_SECRET_KEY) {
        // we need to do this because the headers send us back string | string[] | undefined
        const token = (_a = req.headers[process.env.TOKEN_HEADER_KEY]) === null || _a === void 0 ? void 0 : _a.toString();
        const secretKey = process.env.JWT_SECRET_KEY;
        if (token) {
            jsonwebtoken_1.default.verify(token, secretKey, (err, infoId) => {
                if (err) {
                    res.status(403).end();
                    return;
                }
                req.iduser = infoId;
                next();
            });
        }
        else {
            res.status(403).end();
            return;
        }
    }
    else {
        res.status(403).end();
        return;
    }
};
exports.authToken = authToken;
