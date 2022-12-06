import { IUser } from './../models/user-model';
import { Request, Response } from 'express';
import { UserService } from '../services';

const createAgencyUser = async (req: Request, res: Response) => {
  const userData = req.body as IUser;
  try {
    const foundAgency = await UserService.findUserById(userData.phonenumber);
    if (foundAgency) {
      throw Error('Agency already exists');
    }
    const agency = await UserService.createUser(userData);
    res.status(200).send({ status: 'success', data: { agency } });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

const createCourierUser = async (req: Request, res: Response) => {
  const userData = req.body as IUser;
  try {
    const foundCourier = await UserService.findUserById(userData.phonenumber);
    if (foundCourier) {
      throw Error('Courier already exists');
    }
    const courier = await UserService.createUser(userData);
    res.status(200).send({ status: 'success', data: { courier } });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export default {
  createAgencyUser,
  createCourierUser
};
