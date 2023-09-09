import Servico, { IServico } from "../model/servico_model";
import Funcionario from "../model/funcionario_model";
import Cliente from "../model/cliente_model";

export class ServicoService {
  static async createService(
    serviceDTO: IServico
  ): Promise<IServico | undefined> {
    try {
      const foundFunc = await Funcionario.findById(serviceDTO.funcionario);

      const foundClient = await Cliente.findById(serviceDTO.cliente);

      const serviceMapped = new Servico({
        nome: serviceDTO.nome,
        descrição: serviceDTO.descrição,
        valor: serviceDTO.valor,
        tempoServico: serviceDTO.tempoServico,
        ativo: serviceDTO.ativo,
        funcionario: foundFunc,
        cliente: foundClient,
        status: serviceDTO.status,
      });

      serviceMapped.save();

      return serviceMapped;
    } catch (err) {
      console.log(err);
    }
  }
}
