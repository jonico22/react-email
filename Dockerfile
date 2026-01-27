# Etapa 1: Dependencias
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Etapa 2: Desarrollo y Preview
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Puerto por defecto de React Email
EXPOSE 3000

# Comando para levantar la interfaz de previsualización
CMD ["npm", "run", "dev"]