# Use a imagem base do Node.js
FROM node:14-alpine

# Instale o Docker CLI
RUN apk update && apk add docker-compose

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que o backend estará escutando (substitua a porta 3000, se necessário)
EXPOSE 3000

# Comando para iniciar o servidor do backend juntamente com o banco de dados usando o docker-compose
CMD ["docker-compose", "up", "--build", "-d", "db", "&&", "npm", "start"]
