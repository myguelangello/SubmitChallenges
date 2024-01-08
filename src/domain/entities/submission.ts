import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
  challengeId: string
  studentId: string
  createdAt?: Date
}

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {     // o private indica que não posso instanciar a classe fora dela
    super(props, id)
  }

  static create(props: SubmissionProps, id?: string) {// é static pois precisa ser chamado sem instanciar a classe
    const submission = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    })

    return submission
  }
}