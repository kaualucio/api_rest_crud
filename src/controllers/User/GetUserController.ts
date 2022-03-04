import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import User from '../../entities/User';

export class GetUserController {
  async handle(request: Request, response: Response) {

    const id = request.params.id
    const repo = getRepository(User);

    const userAlreadyExists = await repo.find({
      where: {
        id
      }
    });

    if (!userAlreadyExists) {
      return response.status(404).json({ error: 'No user with this ID' });
    }

    return response.status(200).json(userAlreadyExists);

  }
}