import { DeleteUserController } from './../controllers/User/DeleteUserController';
import { GetUserController } from './../controllers/User/GetUserController';
import { GetAllUsersController } from './../controllers/User/GetAllUsersController';
import { AddUserControler } from '../controllers/User/AddUserController';
import { Router } from 'express';
import { UpdateUserController } from '../controllers/User/UpdateUserController';

const router = Router();

router.get('/get-all', new GetAllUsersController().handle)
router.get('/get-user/:id', new GetUserController().handle)
router.post('/add', new AddUserControler().handle)
router.delete('/delete/:id', new DeleteUserController().handle)
router.patch('/update/:id', new UpdateUserController().handle)

export default { router }