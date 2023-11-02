FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i
RUN  npm i ts-node typescript

COPY . .

FROM base as production

RUN npm run dev
