import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import User from '../../entities/User';

export class UpdateUserController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const repo = getRepository(User);
    const userExists = await repo.findOne(id)

    if (!userExists) {
      return response.status(404).json({ error: "No user with this ID" });
    }

    const updatedUser = repo.create({
      ...userExists,
      ...request.body
    })

    await repo.save(updatedUser)

    return response.status(200).json(updatedUser)
  }
}