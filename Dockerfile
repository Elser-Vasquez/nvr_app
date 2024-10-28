# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Expone el puerto 3000 para acceder al servidor
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["npm", "run", "start"]
