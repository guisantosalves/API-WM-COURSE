import { LoginService } from "../service/login_service";
import { LoginSchema } from "../utils/types";

export class LoginController {
  static async login(loginDTO: LoginSchema): Promise<LoginSchema | undefined> {
    const logedData = await LoginService.login(loginDTO);
    return logedData;
  }
}
