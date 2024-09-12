# Submit Challenges

Backend of a Node.js API for submitting challenges using SOLID and TDD concepts seeking to make it more scalable.

### Entities:
- student
- submission
- challenge
- correction

Até onde entendi nos estudos de padrões e o que se aplicia nesse exemplo...
O diretório **/core/domain** está indicando que o que está lá é diretamente relacionado com a pasta **domain no src** do projeto,
ou seja, as entidades em **/src/domain/entities** herdam da classe Entity em /core/domain.

**Controller**: É uma função assincrona quer recebe a requisição e a resposta e chama uma factory.

**Factory**: Por hora a lógica de uso da factory é que ela chama/instancia um repositório e passa esse repositório em uma instância de UseCase e retorna o UseCase/Service. É na factorie onde escolhe qual implemetação do repositório será usada.

**UseCase**: É uma classe que recebe um repositório e tem um método execute que recebe os dados e retorna o resultado.

<!-- As **usecases** nesse caso servem para que não seja fazer validações de regras de negócio dentro das entidades. -->

### Use Cases:
- [] Create student
- [X] Create Submission of a challenge
- [] Create challenge
- [] Create correction

### Tests:
- [X] Should be able to create a new challenge submission
- [] Should not be able to create a submission with a non-existent student
- [] Should not be able to create a submission with a non-existent challenge
- [] Should not be able to create a student with an invalid email

#### Vídeo de referência: 
- [x] [Construindo APIs Node.js escaláveis com SOLID + TDD - Decode #010](https://www.youtube.com/live/mjBsii0eiuI?si=oUFIrgm_u5YMDS9P)
<!-- - [x] [Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44](https://www.youtube.com/watch?v=vAV4Vy4jfkc) -->


