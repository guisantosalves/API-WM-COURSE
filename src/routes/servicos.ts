import express from "express";
import { IServico } from "../model/servico_model";
import { ServicoController } from "../controller/servico_controller";

const ServicosRouter = express.Router();

ServicosRouter.get("/servicos", (req, res) => {
  res.send("servicos router get");
});

ServicosRouter.post("/servicos", async (req, res) => {
  const serviceDTO: IServico = req.body;
  const savedService = await ServicoController.createSvc(serviceDTO);
  if (savedService) {
    res.status(201).send(savedService);
  } else {
    res.sendStatus(400);
  }
});

ServicosRouter.put("/servicos", (req, res) => {
  res.send("servicos router put");
});

ServicosRouter.delete("/servicos", (req, res) => {
  res.send("servicos router delete");
});

export default ServicosRouter;
