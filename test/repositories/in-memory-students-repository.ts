
import { IStudentsRepository } from "../../src/application/repositories/IStudentsRepository"
import { Student, StudentProps } from "../../src/domain/entities/student"

export class InMemoryIStudentsRepository implements IStudentsRepository {
  public items: Student[] = []

  async create({ email, name }: StudentProps): Promise<Student> {
    // For simplicity in an in-memory repository, we'll assume a simple push
    // In a real database, you would save the student and update the id if necessary
    const id = (this.items.length + 1).toString()
    this.items.push(props, id);

    return studentData
  }

  async findById(id: string): Promise<Student | null> {
    const student = this.items.find(student => student.id === id)

    if (!student) {
      return null
    }

    return student
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = this.items.find(student => student.props.email === email)

    if (!student) {
      return null
    }

    return student
  }
}