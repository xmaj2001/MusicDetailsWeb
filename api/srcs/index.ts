import express from "express";
import routers from "./router";
import cors from 'cors'

const app = express();
const port = 3000;
app.use(express.json({limit:'20mb'}));
app.use(cors());

app.use(routers);

export default app;
 