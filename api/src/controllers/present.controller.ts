import { Request, Response } from "express";
import { Present,  } from "../interfaces/present.interface";
import presentService from "../services/present.service";
export async function presentPOST(req: Request, res: Response) {
  const data: Present = req.body;
  const result = await presentService.createNew(data);
  res.status(200).send(result);
}
export async function presentUPDATE(req: Request, res: Response) {
  const data: Present = req.body;
  const result = await presentService.updateStatus(data);
  res.status(200).send(result);
}
export async function presentGETALL(req: Request, res: Response) {
  const result = await presentService.getList();
  res.status(200).send(result);
}
