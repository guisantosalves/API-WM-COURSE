import { IFuncionario } from "../model/funcionario";
import { FuncionarioService } from "../service/funcionario";

export class FuncionarioController {
  static async getAllFnc(): Promise<Array<IFuncionario> | undefined> {
    const allData = await FuncionarioService.getAllFunc();
    return allData;
  }

  static async createFnc(
    funcionarioDTO: IFuncionario
  ): Promise<IFuncionario | undefined> {
    const createdData = await FuncionarioService.createFunc(funcionarioDTO);
    return createdData;
  }

  static async getFncById(
    id: string
  ): Promise<IFuncionario | undefined | null> {
    const data = await FuncionarioService.getFuncById(id);
    return data;
  }

  static async updateFnc(
    id: string,
    funcionarioDTO: IFuncionario
  ): Promise<IFuncionario | null | undefined> {
    const updatedData = await FuncionarioService.updateFunc(id, funcionarioDTO);
    return updatedData;
  }
  static async deleteFnc(id: string): Promise<IFuncionario | null | undefined> {
    const deletedData = await FuncionarioService.deleteFunc(id);
    return deletedData;
  }
}
