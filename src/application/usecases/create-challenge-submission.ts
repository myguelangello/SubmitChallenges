import { Submission } from "../../domain/entities/submission"
import { IChallengesRepository } from "../repositories/IChallengesRepository";
import { IStudentsRepository } from "../repositories/IStudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string
  challengeId: string
}

type CreateChallengeSubmissionResponse = { submission: Submission }

export class CreateChallengeSubmission {
  //caso com eslint não funcionar pode criar com private fora do constructor, passar o parâmetro e dentro chamar com "this."
  constructor(
    private studentsRepository: IStudentsRepository,
    private challengesRepository: IChallengesRepository,
  ) { }

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest): Promise<CreateChallengeSubmissionResponse> { // esse método basicamente a única funcão de criação/submissão de um desafio
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

    return { submission }
  }
}