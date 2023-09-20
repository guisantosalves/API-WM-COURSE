import Funcionario, { IFuncionario } from "../model/funcionario_model";
import bcrypt from "bcrypt";

export class FuncionarioService {
  static async getAllFunc(): Promise<IFuncionario[] | undefined> {
    try {
      const AllFunc: Array<IFuncionario> = await Funcionario.find({});
      return AllFunc;
    } catch (err) {
      console.log(err);
    }
  }

  static async createFunc(
    funcionarioDTO: IFuncionario
  ): Promise<IFuncionario | undefined> {
    try {
      const passHash = await bcrypt.hash(funcionarioDTO.senha, 10); // making the hash

      const funcionarioEntity = new Funcionario({
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

      const funcionarioSaved = await funcionarioEntity.save();

      return funcionarioSaved;
    } catch (err) {
      console.log(err);
    }
  }

  static async getFuncById(
    id: string
  ): Promise<IFuncionario | null | undefined> {
    try {
      const funcFromDbByid: IFuncionario | null = await Funcionario.findById(
        id
      );
      return funcFromDbByid;
    } catch (err) {
      console.log(err);
    }
  }

  static async updateFunc(
    id: string,
    funcionarioDTO: IFuncionario
  ): Promise<IFuncionario | null | undefined> {
    try {
      if (funcionarioDTO.senha) {
        const changingPass = await bcrypt.hash(funcionarioDTO.senha, 10);
        funcionarioDTO.senha = changingPass; // overwrite the pass
      }

      const updatingFunc = await Funcionario.findByIdAndUpdate(
        id,
        funcionarioDTO
      );

      if (updatingFunc) {
        const updatedFunc = await Funcionario.findById(id);
        return updatedFunc;
      } else {
        return undefined;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteFunc(
    id: string
  ): Promise<IFuncionario | null | undefined> {
    try {
      const funcDeleted = await Funcionario.findOneAndDelete({ _id: id });
      return funcDeleted;
    } catch (err) {
      console.log(err);
    }
  }
}
