import { Request, Response } from "express";

export const test = (req: Request, res: Response): Response => {
    return res.status(200).send({message: 'Here is the test at todoappController'});
};

export const register = (req: Request, res: Response): Response => {
    return res.status(200).send({message: 'Here is the register at todoappController'});
};

export const login = (req: Request, res: Response): Response => {
    return res.status(200).send({message: 'Here is the login at todoappController'});
};

export const getUserTasks = (req: Request, res: Response): Response => {
    return res.status(200).send({message: 'Here is the getUserTasks at todoappController'});
};

export const createUserTask = (req: Request, res: Response): Response => {
    return res.status(200).send({message: 'Here is the createUserTask at todoappController'});
};

export const updateUserTask = (req: Request, res: Response): Response => {
    return res.status(200).send({message: 'Here is the updateUserTask at todoappController'});
};