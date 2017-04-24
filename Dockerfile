FROM node:alpine

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app

EXPOSE 80

CMD ["npm", "start"]
