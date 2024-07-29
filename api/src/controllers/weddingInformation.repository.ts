import { Request, Response } from "express";
import weddingInformationService from "../services/weddingInformation.service";
import { WeddingInformation } from "../interfaces/weddingInformation.interface";

export async function informationPOST(req: Request, res: Response) {
  const data: WeddingInformation = req.body;
  const result = await weddingInformationService.createNew(data);
  res.status(200).send(result);
}

export async function informationGET(req: Request, res: Response) {
  const result = await weddingInformationService.getInfos();
  res.status(200).send(result);
}
