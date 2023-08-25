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
}
