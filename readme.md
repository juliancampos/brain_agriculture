# Brain Agriculture

## Configurações

> Lista com todas as configurações possíveis e seus defaults caso existam

- **PORT**: Porta na qual o servidor web ficará disponível
- **DATABASE_URL**: URL de conexão com o banco de dados Postgres

## Stack

Para a criação deste projeto foram utilizadas as seguintes tecnologias e frameworks:

- [node.js] - Plataforma de desenvolvimento
- [Express] - Web framework minimalista desenvolvido em node.js
- [Docker] - Plataforma de virtualização de sistemas operacionais
- [Joi] - Biblioteca para validação de dados 
- [Dotenv] - Biblioteca para configuração de variáveis de ambiente
- [Prisma] - Biblioteca para interação com o banco de dados
- [Winston] - Biblioteca para padronização de log

## Instalação e execução da aplicação

### Executando local

1. Iniciar o banco de dados:
```sh
docker-compose up -d
```

2. Criar o arquivo .env de acordo com o arquivo .env.example

3. Para executar o projeto localmente basta executar o seguinte comando:

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

A pasta documentation contém as rotas com exemplos de requisição.

Sugestão: utilização do plugin "Rest Api" para enviar requisições

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
