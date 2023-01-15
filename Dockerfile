FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3001

CMD [ "npx", "serve", "build", "-l", "tcp://0.0.0.0:3001" ]