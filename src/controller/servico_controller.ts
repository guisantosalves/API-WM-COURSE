import { IServico } from "../model/servico_model";
import { ServicoService } from "../service/servicos_service";

export class ServicoController {
  static async getAllSvc(): Promise<Array<IServico> | undefined> {
    const allData = await ServicoService.getAllService();
    return allData;
  }

  static async createSvc(serviceDTO: IServico): Promise<IServico | undefined> {
    const createdData = await ServicoService.createService(serviceDTO);
    return createdData;
  }

  static async getSvcById(id: string): Promise<IServico | undefined | null> {
    const data = await ServicoService.getServiceById(id);
    return data;
  }

  static async updateSvc(
    id: string,
    serviceDTO: IServico
  ): Promise<IServico | null | undefined> {
    const updatedData = await ServicoService.updateService(id, serviceDTO);
    return updatedData;
  }
  static async deleteSvc(id: string): Promise<IServico | null | undefined> {
    const deletedData = await ServicoService.deleteService(id);
    return deletedData;
  }
}
