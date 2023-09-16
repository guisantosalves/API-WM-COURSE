import express from "express";
import { Express } from "express";
import ClienteRouter from "./clientes";
import FuncionarioRouter from "./funcionario";
import ServicosRouter from "./servicos";
import loginRouter from "./login";

const routes = (app: Express) => {
  app.route("/").get((req, res) => {
    res.status(200).json({ message: "That is the api for wm barros course" });
  });

  app.use(
    express.json(),
    ClienteRouter,
    FuncionarioRouter,
    ServicosRouter,
    loginRouter
  );
};

export default routes;
