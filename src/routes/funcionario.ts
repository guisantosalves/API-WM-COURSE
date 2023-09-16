import express, { Request, Response } from "express";
import { FuncionarioController } from "../controller/funcionario_controller";
import { IFuncionario } from "../model/funcionario_model";
import { authToken } from "../middleware/authentication";

const FuncionarioRouter = express.Router();

FuncionarioRouter.get(
  "/funcionario",
  authToken,
  async (req: Request, res: Response) => {
    const AllFnc = await FuncionarioController.getAllFnc();
    if (AllFnc) {
      res.status(200).send(AllFnc);
    } else {
      res.sendStatus(404);
    }
  }
);

FuncionarioRouter.post(
  "/funcionario",
  authToken,
  async (req: Request, res: Response) => {
    const FuncionarioDTO: IFuncionario = req.body;
    const savedFnc = await FuncionarioController.createFnc(FuncionarioDTO);
    if (savedFnc) {
      res.status(201).send(savedFnc);
    } else {
      res.sendStatus(400);
    }
  }
);

FuncionarioRouter.get(
  "/funcionario/:id",
  authToken,
  async (req: Request, res: Response) => {
    const idFuncionario: string = req.params.id;
    const fncFromDb = await FuncionarioController.getFncById(idFuncionario);
    if (fncFromDb) {
      res.status(200).send(fncFromDb);
    } else {
      res.status(404);
    }
  }
);

FuncionarioRouter.put(
  "/funcionario/:id",
  authToken,
  async (req: Request, res: Response) => {
    const idToUpdate = req.params.id;
    const FuncionarioDTO: IFuncionario = req.body;

    const updatedCliente = await FuncionarioController.updateFnc(
      idToUpdate,
      FuncionarioDTO
    );

    if (updatedCliente) {
      res.status(200).send(updatedCliente);
    } else {
      res.sendStatus(400);
    }
  }
);

FuncionarioRouter.delete(
  "/funcionario/:id",
  authToken,
  async (req: Request, res: Response) => {
    const idToDelete = req.params.id;
    const deletedClient = await FuncionarioController.deleteFnc(idToDelete);

    if (deletedClient) {
      res.status(200).send(deletedClient);
    } else {
      res.status(400);
    }
  }
);

export default FuncionarioRouter;
