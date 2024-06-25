import morgan from 'morgan';
import cors from 'cors';
import express from 'express'

import organismoRoutes from "./routes/organismo.router";
import tramiteRoutes from "./routes/tramite.router";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use("/api/organismo", organismoRoutes);
app.use("/api/tramite", tramiteRoutes);

export default app;