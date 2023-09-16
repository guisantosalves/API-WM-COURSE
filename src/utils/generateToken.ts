import { LoginSchema } from "./types";
import Jwt from "jsonwebtoken";

export const generateToken = (id: string): string | undefined => {
  const jwtSecretkey = process.env.JWT_SECRET_KEY;
  const dataToAssign = {
    id: id,
  };
  if (dataToAssign.id && jwtSecretkey) {
    const token = Jwt.sign(dataToAssign, jwtSecretkey);
    return token;
  } else {
    return undefined;
  }
};
