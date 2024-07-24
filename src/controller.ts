import { RequestHandler } from "express";

const controllerFunction: RequestHandler = (_req, res) => {
  res.send("hola");
};

export default controllerFunction;
