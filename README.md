# Cadastro de carro

**RF**

- Deve ser possível cadastrar um novo carro
- Deve ser possível listar todas as categorias

**RN**

- Não deve ser possível cadastrar um carro com uma placa já existente
- Não deve ser possível alterar a placa de um carro já cadastrado
- O carro deve ser cadastrado por padrão, com disponibilidade
- O usuário responsavél pelo cadastro deve ser um usuário administrador

# Listagem de carro

**RF**

- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome do carro
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo nome da marca

**RN**

- O usuário não precisa estar logado no sistema

# Cadastro de especificação no carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RN**

- Não deve ser possível cadastrar uma especificação se o carro não for cadastrado
- Não deve ser possível possível cadastrar uma especificação já existente para o mesmo carro

# Cadastro de imagens do carro

**RF**

- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros

**RNF**

- Utilizar o multer para upload dos arquivos

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuário responsavél pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**RF**

- Deve ser possível cadastrar um aluguel

**RNF**
**RN**

- O aluguel deve ter duração mínima de 24 horas
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
