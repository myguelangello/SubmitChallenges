import { Challenge } from "../../domain/entities/challenge";

/**
 * Essa interface é apenas o contrato de conversasão entre as camadas
 * Onde se define quais são as funções, quais seus parâmetros e qual o seu retorno
 */
export interface ChallengesRepository {
  findById(id: string): Promise<Challenge | null>
}