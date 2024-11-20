import { type Request, type Response, Router } from "express";
import userRoutes from "./userRoutes";

const routes = Router();

routes.get("/ping", (request: Request, response: Response) => {
	return response.json("pong");
});

routes.use(userRoutes);

export default routes;
