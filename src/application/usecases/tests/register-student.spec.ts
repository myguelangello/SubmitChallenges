import { InMemoryIStudentsRepository } from "../../../../test/repositories/in-memory-students-repository"
import { Student } from "../../../domain/entities/student"
import { UserAlreadyExistsError } from "../errors/user-already-exists-error"
import { RegisterStudentUseCase } from "../register-student"

let studentsRepository: InMemoryIStudentsRepository
let sut: RegisterStudentUseCase

describe('Create student use case', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryIStudentsRepository()
    sut = new RegisterStudentUseCase(studentsRepository)
  })

  it('should be able to register', async () => {

    const { student } = await sut.execute({
      name: 'any_name',
      email: 'any_email'
    })

    expect(student.id).toEqual(expect.any(String))
    expect(student.props.name).toEqual('any_name')
    expect(student.props.email).toEqual('any_email')
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'any_email'

    await sut.execute({
      name: 'any_name',
      email
    })

    const expected = sut.execute({
      name: 'any_name',
      email
    })
  })
})