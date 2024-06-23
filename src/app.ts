import morgan from 'morgan';
import cors from 'cors';
import express from 'express'
import userRoutes from "./routes/user.router";
import eventRoutes from "./routes/events.router";
import todosRoutes from "./routes/todos.router";
import datageoRoutes from "./routes/datageo.router";
import organismoRoutes from "./routes/organismo.router";
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/api", userRoutes);
app.use("/api", eventRoutes);
app.use("/api/todos", todosRoutes);
app.use("/api/datageo", datageoRoutes);
app.use("/api/organismo", organismoRoutes);
export default app;