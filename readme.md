# Brain Agriculture

## Configurações

> Lista com todas as configurações possíveis e seus defaults caso existam

- **PORT**: Porta na qual o servidor web ficará disponível
- **DATABASE_URL**: URL de conexão com o banco de dados Postgres

## Stack

Para a criação deste projeto foram utilizadas as seguintes tecnologias e frameworks:

- [node.js] - Plataforma de desenvolvimento
- [Express] - Web framework minimalista desenvolvido em node.js
- [Docker] - Plataforma de deploy
- [Joi] - Plataforma de monitoramento 
- [Dotenv] - Integração contínua
- [Prisma] - Integração contínua

## Instalação e execução da aplicação

### Executando local

Iniciar o banco de dados:
```sh
docker-compose up -d
```

Para executar o projeto localmente basta executar o seguinte comando:

```sh
npm i
npm start
```

## Estrutura do banco de dados

### Tabelas
#### Producer
 - id  Int @default(autoincrement()) @id
 - documentType String
 - documentNumber String @unique
 - name  String
 - farms Farm[]
 - createdAt DateTime?
 - updatedAt DateTime?

#### Farm
 - id  Int @default(autoincrement()) @id
 - name  String
 - city  String
 - state String
 - totalArea Float
 - productiveArea Float
 - vegetationArea Float
 - producer  Producer? @relation(fields: [producerId], references: [id], onDelete: Cascade)
 - producerId  Int?
 - cultivation String[]
 - createdAt DateTime?
 - updatedAt DateTime?

## Endpoints da api

#### /producers
- Criar o registro de um produtor
- Listar todos os produtores

#### /producer/:producerId 
- Obter dados de um produtor
- Excluir um produtor
- Atualizar um produtor


#### /farms 
- Criar o registro de uma fazenda
- Listar todas as fazendas

#### /farm/:farmId
- Obter dados de uma fazenda
- Excluir uma fazenda
- Atualizar uma fazenda

#### /farm/:farmId/producer
 - Relacionar uma fazenda a um produtor