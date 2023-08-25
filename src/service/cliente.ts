import Cliente, { ICliente } from "../model/cliente";

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
}
