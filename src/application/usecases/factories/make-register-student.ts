import { InMemoryIStudentsRepository } from "../../../../test/repositories/in-memory-students-repository";
import { RegisterStudentUseCase } from "../register-student";

export function makeRegisterStudentUseCase() {
  const studentsRepository = new InMemoryIStudentsRepository();
  const registerStudentUseCase = new RegisterStudentUseCase(studentsRepository);

  return registerStudentUseCase;
}