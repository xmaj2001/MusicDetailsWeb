import express from 'express'
import cors from 'cors'
import routers from './routers/Routers';

const app = express();
const port = 3000;

app.use(cors());

app.use(routers);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});