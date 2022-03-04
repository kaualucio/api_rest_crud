import { getRepository } from 'typeorm';
import { Response, Request } from 'express';
import User from '../../entities/User';

export class GetAllUsersController {
  async handle(request: Request, response: Response) {

    const repo = getRepository(User);

    const allUsers = await repo.find();

    return response.status(200).json(allUsers)

  }
}