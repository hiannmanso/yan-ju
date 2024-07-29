import { Router } from "express";
import {
  guestGETALL,
  guestPOST,
  guestUPDATE,
} from "../controllers/guest.controller";
const guestRouter = Router();
guestRouter.post("/guest", guestPOST);
guestRouter.get("/guest", guestGETALL);
guestRouter.put("/guest", guestUPDATE);
export default guestRouter;
