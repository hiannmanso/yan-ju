import { Router } from "express";
import guestRouter from "./guest.router";
import photoRouter from "./photo.router";
import presentRouter from "./present.router";
import informationRouter from "./weddingInformation.router";

const router = Router();
router.use(guestRouter);
router.use(photoRouter);
router.use(presentRouter);
router.use(informationRouter);
export default router;
