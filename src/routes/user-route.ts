import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router.get('/user/agency/:id', UserController.getAgencyUser);
router.get('/user/courier/:id', UserController.getCourierUser);

export default router;