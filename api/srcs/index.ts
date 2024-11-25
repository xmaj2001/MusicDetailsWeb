import express from "express";
import routers from "./router";
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;
app.use(express.json({limit:'20mb'}));
app.use(cors());

app.use(routers);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
 
export default app;