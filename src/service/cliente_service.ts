import Cliente, { ICliente } from "../model/cliente_model";
import bcrypt from "bcrypt";

export class ClientService {
  static async getAllClient(): Promise<ICliente[] | undefined> {
    try {
      const AllClientes: Array<ICliente> = await Cliente.find({});
      return AllClientes;
    } catch (err) {
      console.log(err);
    }
  }

  static async createClient(
    objectDTO: ICliente
  ): Promise<ICliente | undefined> {
    try {
      const client: ICliente = new Cliente({
        nome: objectDTO.nome,
        dataNascimento: objectDTO.dataNascimento,
        rua: objectDTO.rua,
        obs: objectDTO.obs,
        bairro: objectDTO.bairro,
        cep: objectDTO.cep,
        foto: objectDTO.foto,
        ativo: objectDTO.ativo,
      });

      const clienteSaved = await client.save();

      return clienteSaved;
    } catch (err) {
      console.log(err);
    }
  }

  static async getClientById(id: string): Promise<ICliente | null> {
    try {
      const clientFromDbById: ICliente | null = await Cliente.findById(id);
      return clientFromDbById;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async updateClient(
    id: string,
    clienteDTO: ICliente
  ): Promise<ICliente | null | undefined> {
    try {
      // updating
      const client = await Cliente.findByIdAndUpdate(id, clienteDTO);
      if (client) {
        // getting updated data
        const updatedClient = await Cliente.findById(id);
        return updatedClient;
      } else {
        return undefined;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteClient(id: string): Promise<ICliente | null | undefined> {
    try {
      /**
        This function differs slightly from Model.findOneAndRemove() 
        in that findOneAndRemove() becomes a MongoDB findAndModify() command, 
        as opposed to a findOneAndDelete() command. 
        For most mongoose use cases, this distinction is purely pedantic. 
        You should use findOneAndDelete() unless you have a good reason not to.
       */
      const clientDeleted = await Cliente.findOneAndDelete({ _id: id });
      return clientDeleted;
    } catch (err) {
      console.log(err);
    }
  }
}
