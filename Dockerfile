FROM node:13.10 AS dev

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./app ./

RUN apt-get -y update
RUN apt-get -y install vim less

RUN yarn
#RUN yarn upgrade
RUN yarn build name_generator

ENV CI true

EXPOSE 3000

CMD yarn start
