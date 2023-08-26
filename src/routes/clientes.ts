import express from "express";

const ClienteRouter = express.Router();

ClienteRouter.get("/cliente", (req, res) => {
  res.status(200).json({message: "exemple"});
});

ClienteRouter.post("/cliente", (req, res) => {
  //   const body = req.body;
  //   console.log(body);
  res.send("cliente router post");
});

ClienteRouter.put("/cliente", (req, res) => {
  res.send("cliente router put");
});

ClienteRouter.delete("/cliente", (req, res) => {
  res.send("cliente router delete");
});

export default ClienteRouter;
