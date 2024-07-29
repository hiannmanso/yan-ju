import { Request, Response } from "express";
import photoService from "../services/photo.service";
import { Photo, PhotoList } from "../interfaces/photo.interface";

export async function photoPOST(req: Request, res: Response) {
  const data: PhotoList = req.body;
  const result = await photoService.createNew(data);
  res.status(200).send(result);
}

export async function photoGETALL(req: Request, res: Response) {
  const result = await photoService.getList();
  res.status(200).send(result);
}
