import { getRepository } from 'typeorm';
import { Request, Response } from 'express'
import User from '../../entities/User';

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const id = request.params.id

    const repo = getRepository(User);

    const userAlreadyExists = await repo.find({
      where: {
        id
      }
    });

    if (userAlreadyExists.length === 0) {
      return response.status(400).json({ error: 'No user with this ID' });
    }

    await repo.delete(id)

    return response.status(200).json({ message: `The user with the ID: ${id} was successfully deleted` })

  }
}