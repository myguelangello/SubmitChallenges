
import { Entity } from "../../core/domain/Entity";

type StudentProps = {
  name: string
  email: string
}

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string) {     // o private indica que não posso instanciar a classe fora dela
    super(props, id)
  }

  static create(props: StudentProps, id?: string) {
    const student = new Student(props, id)

    return student
  }
}