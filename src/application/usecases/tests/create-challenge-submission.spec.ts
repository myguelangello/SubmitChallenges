import { InMemoryIChallengesRepository } from "../../../../test/repositories/in-memory-challenges-repository"
import { InMemoryIStudentsRepository } from "../../../../test/repositories/in-memory-students-repository"
import { Challenge } from "../../../domain/entities/challenge"
import { Student } from "../../../domain/entities/student"
import { CreateChallengeSubmission } from "../create-challenge-submission"

let studentsRepository: InMemoryIStudentsRepository
let challengesRepository: InMemoryIChallengesRepository
let sut: CreateChallengeSubmission

describe('Create challenge submission use case', () => {
  beforeEach(() => {
    studentsRepository = new InMemoryIStudentsRepository()
    challengesRepository = new InMemoryIChallengesRepository()
  })

  it('should be able to create a new challenge submission', async () => {


    const student = Student.create({
      name: 'Student 1',
      email: 'student@example.com',
    })

    const challenge = Challenge.create({
      title: 'Challenge 1',
      instructionsUrl: 'https://example.com/'
    })

    studentsRepository.items.push(student)
    challengesRepository.items.push(challenge)

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository,
    )

    const response = sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    })

    expect(response).toBeTruthy()
  })
})