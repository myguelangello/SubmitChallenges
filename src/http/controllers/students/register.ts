import { Request, Response } from "express";
import { z } from "zod";
import { makeRegisterStudentUseCase } from "../../../application/usecases/factories/make-register-student";

export async function register(request: Request, response: Response) {
  const createUserBodySchema = z.object({
    name: z
      .string({
        invalid_type_error: 'Nome deve ser uma string',
        required_error: 'O campo nome é obrigatório',
      })
      .min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
    email: z.string({
      invalid_type_error: 'Email deve ser uma string',
      required_error: 'Email é obrigatório',
    }),
  });

  try {
    const { name, email } = createUserBodySchema.parse(request.body);

    const registerUseCase = makeRegisterStudentUseCase();
    await registerUseCase.execute({ name, email });

  } catch (error) {
    // verify if error is an instance of zod error or not
    if (error instanceof z.ZodError) {
      return response.status(400).json({ error: error.issues });
    } else if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    }
    return response.status(400).json({ error: error })
  }

  return response.status(201).send();
}