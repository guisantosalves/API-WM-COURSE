import express, { Request, Response } from "express";
import { LoginController } from "../controller/login_controller";
import { LoginSchema } from "../utils/types";

const loginRouter = express.Router();

loginRouter.post("/login", async (req: Request, res: Response) => {
  const loginDTO: LoginSchema = req.body;
  const logedData = await LoginController.login(loginDTO);
  if (logedData) {
    if (logedData.token)
      res.cookie("token", logedData.token, {
        httpOnly: true,
      });
    res.status(200).send(logedData);
  } else {
    res.sendStatus(400);
  }
});

export default loginRouter;
