import { Submission } from "../../domain/entities/submission"
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string
  challengeId: string
}

export class CreateChallengeSubmission {
  /**
   * caso com eslint não funcionar pode criar com private fora do constructor, passar o parâmetro e dentro chamar com "this."
   */
  constructor(
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository,
  ) { }

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) { // esse método basicamente a única funcão de criação/submissão de um desafio
    const student = await this.studentsRepository.findById(studentId);

    if (!student) {
      throw new Error("Student does not exists.")
    }

    const challenge = await this.challengesRepository.findById(challengeId);

    if (!challenge) {
      throw new Error("Challenge does not exists.")
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    })

    return submission
  }
}