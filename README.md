# A3DATA Pedidos Cirúrgicos - API

http://localhost:3000/

## Instalação

### Mysql Server

Cria o banco de dados
```sh
  docker compose up
```

### API 
Cria a imagem do backend no docker
```sh
docker build --pull --rm -f "DockerFile" -t api:lastest "."
```
Roda um container da api
```sh
docker run --name a3data -p 3000:3000 api:latest
```

## Rotas

### GET

- Procura por todos os pedidos ordenado pelo mais recente (data_criacao)
  - /pedido

```sh
[
  {
  "codigo" : 1,
  "sala": "310",
  "procedimento": "Cirurgia no Tornozelo",
  "doutor": "Sergio Silva",
  "paciente": "Hensley Ferrari",
  "hospital": "Hospital do Centro",
  "data_cirurgia": "2024-02-25T11:38:56.000Z",
  "data_criacao", : "2024-02-25T11:38:56.000Z",
  "observacao": "Paciente com fratura no tornozelo"
  },
  {
    "codigo" : 2,
    "sala": "200",
    "procedimento": "Cirurgia no Tornozelo",
    "doutor": "Pedro Neto",
    "paciente": "Luiz Ricardo",
    "hospital": "Hospital da Zona Sul",
    "data_cirurgia": "2024-02-25T11:38:56.000Z",
    "data_criacao", : "2024-02-25T11:38:56.000Z",
    "observacao": "Paciente com fratura exposta no tornozelo"
  },
]
```

### GET

- Procura por um único pedido
  - /pedido/{codigo}

```sh
 {
  "codigo" : 1,
  "sala": "310",
  "procedimento": "Cirurgia no Tornozelo",
  "doutor": "Sergio Silva",
  "paciente": "Hensley Ferrari",
  "hospital": "Hospital do Centro",
  "data_cirurgia": "2024-02-25T11:38:56.000Z",
  "data_criacao", : "2024-02-25T11:38:56.000Z",
  "observacao": "Paciente com fratura no tornozelo"
}
```

### POST

- Cria um novo pedido cirúrgico
  - /pedido

```sh
 {
  "sala": "310",
  "procedimento": "Cirurgia no Tornozelo",
  "doutor": "Sergio Silva",
  "paciente": "Hensley Ferrari",
  "hospital": "Hospital do Centro",
  "data_cirurgia": "2024-02-25T11:38:56.000Z",
  "observacao": "Paciente com fratura no tornozelo"
}
```

### PUT

- Atualiza um pedido cirúrgico existente
  - /pedido/{codigo}

```sh
 {
  "sala": "310",
  "procedimento": "Cirurgia no Tornozelo",
  "doutor": "Sergio Silva",
  "paciente": "Hensley Ferrari",
  "hospital": "Hospital do Centro",
  "data_cirurgia": "2024-02-25T11:38:56.000Z",
  "observacao": "Paciente com fratura no tornozelo"
}
```

### DELETE

- Deleta um pedido médico existente
  - /pedido/{codigo}
