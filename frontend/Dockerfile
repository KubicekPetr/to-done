FROM node:12.18.3-alpine3.12

WORKDIR /usr/app

COPY package* ./

RUN yarn install

COPY . .