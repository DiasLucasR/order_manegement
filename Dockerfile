# Use uma imagem base com Node.js
FROM node:20-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json (se houver) para dentro do container
COPY package*.json ./

# Instalar as dependências do projeto
RUN yarn


# Copiar o restante dos arquivos do frontend para dentro do container
COPY . .

# Expor a porta que o servidor do frontend vai rodar
EXPOSE 3000

# Definir o comando para iniciar o frontend
CMD ["yarn", "start"]
