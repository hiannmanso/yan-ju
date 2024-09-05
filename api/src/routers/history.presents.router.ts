import { Router } from "express";
import { presentHistoryPOST } from "../controllers/presentHistory.controller";

const presentHistoryRouter = Router();
presentHistoryRouter.post("/present/history/:descricao",presentHistoryPOST );

export default presentHistoryRouter;
