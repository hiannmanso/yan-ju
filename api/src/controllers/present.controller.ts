import { Guest, GuestList } from "./../interfaces/guest.interface";
import { Request, Response } from "express";
import guestService from "../services/guest.service";
import { Present, PresentList } from "../interfaces/present.interface";
import presentService from "../services/present.service";
export async function presentPOST(req: Request, res: Response) {
  const data: PresentList = req.body;
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
