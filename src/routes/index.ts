import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/users';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('server up and running');
});

// User controller
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.delete('/delete/:id', UserController.deletingUser);
router.get('/details/:id', UserController.userDetails);
router.put('/update/:id', UserController.updateUser);
router.get('/image/:id', UserController.userImage);

export default router;
