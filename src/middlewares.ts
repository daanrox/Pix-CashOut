import { NextFunction, Request, Response } from "express";
import { client } from "./database";
import { QueryResult } from "pg";

const keyExist = async (req: Request, res: Response, next: NextFunction) => {
  const queryTemplate: string = `
        SELECT * FROM "keys" WHERE "key" = $1;
    `;

  const queryResult: QueryResult = await client.query(queryTemplate, [
    req.body.key,
  ]);

  if (queryResult.rowCount === 0) {
    return next();
  }

  return res.status(403).json({ message: "Chave pix já resgatada" });
};

export default { keyExist };
