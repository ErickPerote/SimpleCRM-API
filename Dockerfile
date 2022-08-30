# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

ENV HOST=localhost
ENV ENV PORT=1433
ENV USERNAME=sa
ENV PASSWORD=mssql1Ipw
ENV DATABASE=SimpleCRM
ENV SECRET_KEY=vCpl8LAm0q
ENV EXPIRATION_TOKEN=3600

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]