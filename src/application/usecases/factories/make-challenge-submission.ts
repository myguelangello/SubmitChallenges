import { InMemoryIChallengesRepository } from "../../../../test/repositories/in-memory-challenges-repository";
import { InMemoryIStudentsRepository } from "../../../../test/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "../create-challenge-submission";

export function makeCreateChallengeSubmission() {
  const studentRepository = new InMemoryIStudentsRepository();
  const challengeRepository = new InMemoryIChallengesRepository();
  const createChallengeSubmission = new CreateChallengeSubmission(studentRepository, challengeRepository);

  return createChallengeSubmission;
}