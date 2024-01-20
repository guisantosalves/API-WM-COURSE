import Servico, { IServico } from "../model/servico_model";
import Funcionario from "../model/funcionario_model";
import Cliente from "../model/cliente_model";

export class ServicoService {
  static async getAllService(): Promise<IServico[] | undefined> {
    try {
      // o path é literalmente o nome da propertie que vai ser preenchida no objeto
      const allDataService: Array<IServico> = await Servico.find({}).populate([
        { path: "cliente" },
        { path: "funcionario" },
      ]);
      return allDataService;
    } catch (err) {
      console.log(err);
    }
  }

  static async getServiceById(
    id: string
  ): Promise<IServico | null | undefined> {
    try {
      const servicebyid = await Servico.findById(id).populate([
        { path: "cliente" },
        { path: "funcionario" },
      ]); // getting one by id

      return servicebyid;
    } catch (err) {
      console.log(err);
    }
  }

  static async createService(
    serviceDTO: IServico
  ): Promise<IServico | undefined> {
    try {
      const foundFunc = await Funcionario.findById(serviceDTO.funcionario);

      if (foundFunc && foundFunc.senha) foundFunc.senha = "";

      const foundClient = await Cliente.findById(serviceDTO.cliente);

      const serviceMapped = new Servico({
        nome: serviceDTO.nome,
        descricao: serviceDTO.descricao,
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

  static async updateService(
    id: string,
    servicoDTO: IServico
  ): Promise<IServico | null | undefined> {
    try {
      const updatingServico = await Servico.findByIdAndUpdate(id, servicoDTO);

      if (updatingServico) {
        // getting correct data after updated
        const updatedServico = await Servico.findById(id);
        return updatedServico;
      } else {
        return undefined;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteService(id: string): Promise<IServico | null | undefined> {
    try {
      const deletedData = await Servico.findOneAndDelete({ _id: id });
      return deletedData;
    } catch (err) {
      console.log(err);
    }
  }
}
