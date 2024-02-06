FROM node:latest

ARG CACHEBUST
RUN npm install -g mit10s

CMD mit10s
