import { Router } from "express";
import controller from "./controller";
const routers = Router();

routers.get("/", controller.index);
routers.post("/api/uploadfile", controller.uploadfile);
routers.post("/api/downloadfile", controller.downloadfile);

export default routers; 