import "dotenv/config";
import { Request, Response } from "express";
import { Key } from "./interfaces";
import { QueryResult } from "pg";
import { client } from "./database";
import https from "https";

const create = (req: Request, res: Response): void => {
  const value = Number(process.env.VALUE);
  const ci = process.env.CI;
  const cs = process.env.CS;

  const newKey: Key = {
    ...req.body,
    createdAt: new Date(),
  };

  const postData = JSON.stringify({
    value,
    key: req.body.key,
    typeKey: req.body.typeKey,
  });

  const options = {
    hostname: process.env.API,
    port: 443,
    path: process.env.PATH,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": postData.length,
      ci: ci,
      cs: cs,
    },
  };

  const externalRequest = https.request(options, (externalRes) => {
    let body = "";

    externalRes.on("data", (chunk: Buffer) => {
      body += chunk;
    });

    externalRes.on("end", async () => {
      const responseBody = JSON.parse(body);

      if (responseBody.response === "OK") {
        const queryTemplate: string = `
                INSERT INTO "keys"
                    ("key", "type_key")
                VALUES
                    ($1, $2)
                RETURNING *;
                `;

        const queryResult: QueryResult = await client.query(queryTemplate, [
          req.body.key,
          req.body.typeKey,
        ]);

        res.status(201).json(responseBody);
      } else {
        res.status(500).json({ message: responseBody.message });
      }
    });
  });

  externalRequest.on("error", (e: Error) => {
    console.error(`Problem with request: ${e.message}`);
    res.status(500).json({ message: "Erro na requisição externa" });
  });

  externalRequest.write(postData);
  externalRequest.end();
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const queryResult: QueryResult = await client.query("SELECT * FROM keys;");
  return res.status(200).json(queryResult.rows);
};

export default { create, read };
