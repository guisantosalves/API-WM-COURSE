import express, { Request, Response } from "express";
import { IServico } from "../model/servico_model";
import { ServicoController } from "../controller/servico_controller";
import { authToken } from "../middleware/authentication";

const ServicosRouter = express.Router();

ServicosRouter.get(
  "/servicos",
  authToken,
  async (req: Request, res: Response) => {
    const allServicos = await ServicoController.getAllSvc();
    if (allServicos) {
      res.status(200).send(allServicos);
    } else {
      res.sendStatus(404);
    }
  }
);

ServicosRouter.get(
  "/servicos/:id",
  authToken,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const servicosById = await ServicoController.getSvcById(id);
    if (servicosById) {
      res.status(200).send(servicosById);
    } else {
      res.sendStatus(404);
    }
  }
);

ServicosRouter.post(
  "/servicos",
  authToken,
  async (req: Request, res: Response) => {
    const serviceDTO: IServico = req.body;
    const savedService = await ServicoController.createSvc(serviceDTO);
    if (savedService) {
      res.status(201).send(savedService);
    } else {
      res.sendStatus(400);
    }
  }
);

ServicosRouter.put(
  "/servicos/:id",
  authToken,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const serviceDTO: IServico = req.body;

    const updatedService = await ServicoController.updateSvc(id, serviceDTO);
    if (updatedService) {
      res.status(200).send(updatedService);
    } else {
      res.sendStatus(400);
    }
  }
);

ServicosRouter.delete(
  "/servicos/:id",
  authToken,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedService = await ServicoController.deleteSvc(id);
    if (deletedService) {
      res.status(200).send(deletedService);
    } else {
      res.sendStatus(400);
    }
  }
);

export default ServicosRouter;
