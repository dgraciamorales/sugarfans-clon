# Usar la imagen base de Node.js para desarrollo
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /frontend

# Copiar el archivo de dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que se ejecuta la aplicación Next.js
EXPOSE 3000

# Ejecutar el servidor de desarrollo con actualización en tiempo real
CMD ["npm", "run", "dev"]