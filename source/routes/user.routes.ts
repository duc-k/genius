import { Router } from 'express';

import UsersRepository from '@repositories/UsersRepositories';
import CreateUserService from '@services/CreateUserService';

const userRouter = Router();
const usersRepository = new UsersRepository();

userRouter.get('/', (request, response) => {
  const users = usersRepository.all();

  return response.json(users);
});

userRouter.post('/', (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService(usersRepository);

  const user = createUser.execute({
    name,
    email,
    password
  });

  return response.json(user);
});

export default userRouter;
