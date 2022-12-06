import express from 'express';
import { AuthController } from '../controllers';

const router = express.Router();

router.post('/auth/register/agency', AuthController.createAgencyUser);
router.post('/auth/register/courier', AuthController.createCourierUser);

export default router;