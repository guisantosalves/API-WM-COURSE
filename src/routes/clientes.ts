import express, { Response, Request } from "express";
import { ClienteController } from "../controller/cliente_controller";
import { ICliente } from "../model/cliente_model";
import { authToken } from "../middleware/authentication";
const ClienteRouter = express.Router();

ClienteRouter.get(
  "/cliente",
  authToken,
  async (req: Request, res: Response) => {
    const AllCli = await ClienteController.getAllCli();
    if (AllCli) {
      res.status(200).send(AllCli);
    } else {
      res.sendStatus(404);
    }
  }
);

ClienteRouter.get(
  "/cliente/:id",
  authToken,
  async (req: Request, res: Response) => {
    const idCliente: string = req.params.id;
    const getClienteById = await ClienteController.getCliById(idCliente);
    if (getClienteById) {
      res.status(200).send(getClienteById);
    } else {
      res.sendStatus(404);
    }
  }
);

ClienteRouter.post(
  "/cliente",
  authToken,
  async (req: Request, res: Response) => {
    const clienteDTO: ICliente = req.body;

    const createdClient = await ClienteController.createCli(clienteDTO);

    if (createdClient) {
      res.status(201).send(createdClient);
    } else {
      res.sendStatus(400);
    }
  }
);

ClienteRouter.put(
  "/cliente/:id",
  authToken,
  async (req: Request, res: Response) => {
    const idToUpdate = req.params.id;
    const clienteDTO: ICliente = req.body;

    const updatedCliente = await ClienteController.updateCli(
      idToUpdate,
      clienteDTO
    );

    if (updatedCliente) {
      res.status(200).send(updatedCliente);
    } else {
      res.sendStatus(400);
    }
  }
);

ClienteRouter.delete(
  "/cliente/:id",
  authToken,
  async (req: Request, res: Response) => {
    const idToDelete = req.params.id;
    const deletedClient = await ClienteController.deleteCli(idToDelete);

    if (deletedClient) {
      res.status(200).send(deletedClient);
    } else {
      res.sendStatus(400);
    }
  }
);

export default ClienteRouter;
