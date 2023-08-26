import { ICliente } from "../model/cliente";
import { ClientService } from "../service/cliente";
import { Request, Response } from "express";

export class ClienteController {
  static async getAllCli(): Promise<Array<ICliente> | undefined> {
    const AllData = await ClientService.getAllClient();
    return AllData;
  }

  static async createCli(objectDTO: ICliente): Promise<ICliente | undefined> {
    const createdCliente = await ClientService.createClient(objectDTO);
    return createdCliente;
  }

  static async getCliById(id: string): Promise<ICliente | null> {
    const clienteById: ICliente | null = await ClientService.getClientById(id);
    return clienteById;
  }

  static async updateCli(
    id: string,
    clienteDTO: ICliente
  ): Promise<ICliente | null | undefined> {
    const cliUpdated: ICliente | null | undefined =
      await ClientService.updateClient(id, clienteDTO);
    return cliUpdated;
  }

  static async deleteCli(id: string): Promise<ICliente | null | undefined> {
    const CliDeleted: ICliente | null | undefined =
      await ClientService.deleteClient(id);
    return CliDeleted;
  }
}
