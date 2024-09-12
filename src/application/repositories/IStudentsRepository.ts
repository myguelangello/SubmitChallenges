import { Student, StudentProps } from "../../domain/entities/student";

/**
 * Essa interface é apenas o contrato de conversasão entre as camadas
 * Onde se define quais são as funções, quais seus parâmetros e qual o seu retorno
 */
export interface IStudentsRepository {
  findById(id: string): Promise<Student | null>
  findByEmail(email: string): Promise<Student | null>
  create(props: StudentProps): Promise<Student>;
}