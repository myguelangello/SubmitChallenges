# Submit Challenges

Backend of a Node.js API for submitting challenges using SOLID and TDD concepts seeking to make it more scalable.

### Entities:
- student
- submission
- challenge
- correction

Até onde entendi nos estudos de padrões e o que se aplcia nesse exemplo...
O diretório **/core/domain** está indicando que o que está lá é diretamente relacionado com a pasta **domain no src** do projeto,
ou seja, as entidades em **/src/domain/entities** herdam da classe Entity em /core/domain

As **usecases** nesse caso servem para que não seja fazer validações de regras de negócio dentro das entidades.
