import ipcEvents from 'src/constants/ipcEvents';

function invoke<D, T>(args: D): Promise<T> {
  return window.api.ipcInvoke<D, T>(ipcEvents.DB, args);
}

interface UserDto {
  name: string;
  email: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const db = {
  user: {
    create(args: UserDto): Promise<User> {
      return invoke<UserDto, User>(args);
    },
  },
};

export default db;
