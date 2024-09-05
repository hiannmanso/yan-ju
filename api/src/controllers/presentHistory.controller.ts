import { Request, Response } from "express";
import presentHistoryService from "../services/presentHistory.service";
import { HistoricoPresente } from "../interfaces/present.interface";

export async function presentHistoryPOST(req: Request, res: Response) {
    const data:HistoricoPresente = req.body;
    const {descricao} = req.params
    const result = await presentHistoryService.insert(data,descricao);
    res.status(200).send(result);
  }