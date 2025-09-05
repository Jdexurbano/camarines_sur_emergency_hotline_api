import type { Request, Response } from "express";

export const api_handler = (req: Request, res: Response) => {
  res.send("Hello World");
};
