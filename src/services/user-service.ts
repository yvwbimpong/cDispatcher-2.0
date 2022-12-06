import { IUser } from '../models/user-model';

const createUser = async (user: IUser) => user;

const findUserById = async (userId: string) => ({
  phonenumber: '0241234558'
});

export default { createUser, findUserById };
