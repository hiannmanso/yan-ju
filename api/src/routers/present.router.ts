import { Router } from "express";
import {
  presentGETALL,
  presentPOST,
  presentUPDATE,
} from "../controllers/present.controller";

const presentRouter = Router();
presentRouter.post("/present", presentPOST);
presentRouter.get("/present", presentGETALL);
presentRouter.put("/present", presentUPDATE);
export default presentRouter;
