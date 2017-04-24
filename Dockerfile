FROM node:6.5.0

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . /src/app

ENV MONGO_ADDRESS mongo
ENV MONGO_PORT 27017

RUN npm install

EXPOSE 80

CMD ["npm", "start"]
