import { Router } from "express";
import UserController from "../../../controller/UserController";
import { CreateUser } from "../../../core/usecase/user/CreateUser";
import userRepositoryORM from "../../database/repositories/UserRepositoryORM";

const routes = Router();
const userRepository = new userRepositoryORM();
const createUserUseCase = new CreateUser(userRepository);
const userController = new UserController(createUserUseCase);

routes.post('/signup', userController.create)

export default routes;