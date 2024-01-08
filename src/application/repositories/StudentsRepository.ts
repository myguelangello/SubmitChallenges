import { Student } from "../../domain/entities/student";

/**
 * Essa interface é apenas o contrato de conversasão entre as camadas
 * Onde se define quais são as funções, quais seus parâmetros e qual o seu retorno
 */
export interface StudentsRepository {
  findById(id: string): Promise<Student | null>
}