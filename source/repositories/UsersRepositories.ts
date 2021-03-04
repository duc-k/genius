import User from '@models/User';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

class UsersRepository {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  public all(): Array<User> {
    return this.users;
  }

  public create({ name, email, password }: CreateUserDTO): User {
    const user = new User({ name, email, password });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
