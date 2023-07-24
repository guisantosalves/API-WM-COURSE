import express from "express";

const FuncionarioRouter = express.Router();

FuncionarioRouter.get("/funcionario", (req, res) => {
  res.send("funcionario router get");
});

FuncionarioRouter.post("/funcionario", (req, res) => {
  res.send("funcionario router post");
});

FuncionarioRouter.put("/funcionario", (req, res) => {
  res.send("funcionario router put");
});

FuncionarioRouter.delete("/funcionario", (req, res) => {
  res.send("funcionario router delete");
});

export default FuncionarioRouter;
