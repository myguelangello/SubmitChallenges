import { Student } from "../../domain/entities/student";
import { IStudentsRepository } from "../repositories/IStudentsRepository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

type RegisterStudentRequest = {
  name: string
  email: string
}

type RegisterStudentResponse = {
  student: Student;
}

export class RegisterStudentUseCase {
  constructor(private studentsRepository: IStudentsRepository) { }

  async execute({ name, email }: RegisterStudentRequest): Promise<RegisterStudentResponse> {
    const studentExists = await this.studentsRepository.findByEmail(email)

    if (studentExists) {
      throw new UserAlreadyExistsError()
    }
    const props = { name, email }
    const student = await this.studentsRepository.create(props)

    return { student }
  }
}