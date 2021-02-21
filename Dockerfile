FROM node:lts-alpine3.10

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm ci --only=production

COPY . .

EXPOSE 80

ENV NODE_ENV production

CMD ["npm", "start"]