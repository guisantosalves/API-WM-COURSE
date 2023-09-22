import Funcionario from "../model/funcionario_model";
import bcrypt from "bcrypt";
import { LoginSchema } from "../utils/types";
import { generateToken } from "../utils/generateToken";

export class LoginService {
  static async login(loginDTO: LoginSchema): Promise<LoginSchema | undefined> {
    const funcLogin = await Funcionario.findOne({ email: loginDTO.email });
    if (funcLogin && loginDTO.senha) {
      // converte a current senha e compara com a do banco
      // senha passa / senha no banco
      const comparingPass = await bcrypt.compare(
        loginDTO.senha,
        funcLogin.senha
      );

      if (comparingPass) {
        // getting the token after all verification
        const token = generateToken(funcLogin.id);

        const formingLogin: LoginSchema = {
          email: funcLogin.email,
        };

        // passing the token to the object returned
        if (token) {
          formingLogin.token = token;
        } else {
          return undefined;
        }

        return formingLogin;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
}
