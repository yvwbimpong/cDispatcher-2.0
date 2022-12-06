import { Request, Response } from 'express';
import { UserService } from '../services';

const getAgencyUser = async (req: Request, res: Response) => {
  const agencyId = req.params.id
  try {
    const agency = await UserService.findUserById(agencyId);
    res.status(200).send({ status: 'success', data: { agency } });
  } catch (error) {
    return res.status(400).send({ error });
  }
}

const getCourierUser = async (req: Request, res: Response) => {
  const courierId = req.params.id
  try {
    const courier = await UserService.findUserById(courierId);
    res.status(200).send({ status: 'success', data: { courier } });
  } catch (error) {
    return res.status(400).send({ error });
  }
}

export default {
  getAgencyUser,
  getCourierUser
};
