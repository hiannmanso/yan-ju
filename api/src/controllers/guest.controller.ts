import { Guest } from "./../interfaces/guest.interface";
import { Request, Response } from "express";
import guestService from "../services/guest.service";
export async function guestPOST(req: Request, res: Response) {
  const data: Guest = req.body;
  const result = await guestService.createNew(data);
  res.status(200).send(result);
}
export async function guestUPDATE(req: Request, res: Response) {
  const data: Guest = req.body;
  const result = await guestService.updateStatus(data);
  res.status(200).send(result);
}
export async function guestGETALL(req: Request, res: Response) {
  const result = await guestService.getList();
  res.status(200).send(result);
}
