import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
  title: string
  instructionsUrl: string
}

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {     // o private indica que não posso instanciar a classe fora dela
    super(props, id)
  }

  static create(props: ChallengeProps, id?: string) { // é static pois precisa ser chamado sem instanciar a classe
    const challenge = new Challenge(props, id)

    return challenge
  }
}