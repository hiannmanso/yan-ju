import { Router } from "express";
import guestRouter from "./guest.router";
import photoRouter from "./photo.router";
import presentRouter from "./present.router";
import informationRouter from "./weddingInformation.router";
import presentHistoryRouter from "./history.presents.router";

const router = Router();
router.use(guestRouter);
router.use(photoRouter);
router.use(presentRouter);
router.use(informationRouter);
router.use(presentHistoryRouter)
export default router;
