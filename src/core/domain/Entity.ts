import { randomUUID } from 'node:crypto'
export abstract class Entity<T> {
  protected _id: string
  public props: T // esse T indica uqe o tipo de props pode ser genérico

  get id() {
    return this._id
  }

  /**
   * 
   * @param props são todos os campos que a classe que herda possui
   */
  constructor(props: T, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }
}
/**
 * Essa classe implementa comportamentos padrões entre todas as classes (como as entidades em entities)
 */