import express, { Application } from 'express';
import * as todoappController from '../controllers/todoappController';

const todoappRoutes = (app: Application) => {
    const router = express.Router();

    app.use('/api/v1', router);

    //endpoints
    router.get('/test', todoappController.test);

    router.post('/register', todoappController.register);

    router.post('/login', todoappController.login);

    router.get('/tasks', todoappController.getUserTasks);

    router.post('/task', todoappController.createUserTask);

    router.put('/task', todoappController.updateUserTask);
    
}

export default todoappRoutes;