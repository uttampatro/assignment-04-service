import e, { Request, Response } from 'express';
import { UserService } from '../services';
import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');

class UserController {
    registerUser = async (req: Request, res: Response) => {
        try {
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            const image = req.body.image;
            const totalOrders = req.body.totalOrders;
            const salt = await bcrypt.genSalt(10);
            const hasedPassword = await bcrypt.hash(password, salt);

            const user = await UserService.register({
                username: username,
                email: email,
                password: hasedPassword,
                image: image,
                totalOrders: totalOrders,
            });
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    image: user.image,
                    totalOrders: user.totalOrders,
                },
                process.env.TOKEN_SECRET
            );
            return res.json({ user, accessToken: token });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };

    loginUser = async (req: Request, res: Response) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await UserService.login({ email });
            if (!user) {
                return res.status(400).send('Email not found!');
            }
            //password is correct or not
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(400).send('Invalid password');
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    image: user.image,
                    totalOrders: user.totalOrders,
                },
                process.env.TOKEN_SECRET
            );
            return res.json({ user, accessToken: token });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };

    deletingUser = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = await UserService.delete({ id: id });
            if (user) {
                return res.json('delete user successfully');
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };

    userDetails = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = await UserService.details({ id: id });
            return res.send(user);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };

    updateUser = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            const image = req.body.image;
            const salt = await bcrypt.genSalt(10);
            const hasedPassword = await bcrypt.hash(password, salt);
            const user = await UserService.update({
                id: id,
                username: username,
                email: email,
                password: hasedPassword,
                image: image,
            });
            return res.send(user);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    userImage = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const user = await UserService.image({ id: id });
            return res.send(user.image);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new UserController();
