FROM node:lts-alpine

RUN apk update && apk add tzdata && apk add --no-cache bash

ENTRYPOINT echo "A data do servidor é: $(date +'%d/%m/%Y %H:%m:%S')"

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

