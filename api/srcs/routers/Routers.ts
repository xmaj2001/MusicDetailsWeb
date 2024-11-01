import { Router } from "express";
import Cdetails from "../controllers/Cdetails";

const routers = Router();
const details = new Cdetails();

routers.get('/', (req, res) => {
    res.send('<h1>Music Details - Editor de Etiquetas de Músicas</h1>');
});

routers.post('/', details.getDetails);
routers.post('/upload', details.setDetails);

export default routers;