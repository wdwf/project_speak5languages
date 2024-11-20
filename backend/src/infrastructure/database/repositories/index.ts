import AppDataSource from "../ormconfig";
import { UserEntity } from "../entities/UserEntity";

export const UserRepository = AppDataSource.getRepository(UserEntity);
