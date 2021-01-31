FROM node:14 

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm ci --only=production

COPY . .

EXPOSE 3001

ENV NODE_ENV production

CMD ["npm", "start"]