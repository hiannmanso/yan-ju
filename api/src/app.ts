import express from "express";
import "express-async-errors";
import cors from "cors";
import { handleError } from "./middlewares/handleError";
import http from "http";
import router from "./routers";
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(router);

app.use(handleError);

export default server;
