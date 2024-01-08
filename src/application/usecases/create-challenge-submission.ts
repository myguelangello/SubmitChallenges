import { Submission } from "../../domain/Entities/submission"

type CreateChallengeSubmissionRequest = {
  studentId: string
  challengeId: string
}

export class CreateChallengeSubmission {
  execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) { // esse método basicamente a única funcão de criação/submissão de um desafio
    const submission = Submission.create({
      studentId,
      challengeId,
    })

    return submission
  }
}