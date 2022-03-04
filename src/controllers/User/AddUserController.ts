import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import { getRepository } from "typeorm";
import User from "../../entities/User";

export class AddUserControler {
  async handle(request: Request, response: Response) {

    const { name, age, sex, email, password } = request.body

    const repo = getRepository(User);

    if (name === '' || age === '' || sex === '' || email === '' || password === '') {
      return response.status(400).json({ error: 'Empty fields are not allowed' });
    }

    const userAlreadyExists = await repo.findOne({
      where: {
        email
      }
    })

    if (userAlreadyExists) {
      return response.status(400).send({ error: 'There is already a user registered with this email' });
    }

    if (password.length < 8 || password.length > 16) {
      return response.status(400).json({ error: 'Your accurate password is between 8 and 16 characters' });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = repo.create({
      name,
      age,
      sex,
      email,
      password: hashedPassword
    });

    await repo.save(newUser)

    return response.status(200).json(newUser)

  }

}