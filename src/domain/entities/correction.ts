import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
  grade: number // nota de 0 a 10
  submissionId: string // a nota precisa estar associada a alguém a entidade submissão já tem as informações de quem enviou
  createdAt: Date
}

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {     // o private indica que não posso instanciar a classe fora dela
    super(props, id)
  }

  static create(props: CorrectionProps, id?: string) {// é static pois precisa ser chamado sem instanciar a classe
    const correction = new Correction(props, id)

    return correction
  }
}