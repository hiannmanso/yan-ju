import { Router } from "express";
import {
  informationGET,
  informationPOST,
} from "../controllers/weddingInformation.repository";

const informationRouter = Router();

informationRouter.post("/informations", informationPOST);
informationRouter.get("/informations", informationGET);
export default informationRouter;
