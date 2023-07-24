import express from "express";

const ServicosRouter = express.Router();

ServicosRouter.get("/servicos", (req, res) => {
  res.send("servicos router get");
});

ServicosRouter.post("/servicos", (req, res) => {
  res.send("servicos router post");
});

ServicosRouter.put("/servicos", (req, res) => {
  res.send("servicos router put");
});

ServicosRouter.delete("/servicos", (req, res) => {
  res.send("servicos router delete");
});

export default ServicosRouter;
