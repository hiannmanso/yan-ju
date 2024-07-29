import { Router } from "express";
import { photoGETALL, photoPOST } from "../controllers/photo.controller";

const photoRouter = Router();
photoRouter.post("/photos", photoPOST);
photoRouter.get("/photos", photoGETALL);

export default photoRouter;
