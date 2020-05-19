FROM node:10.9 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
CMD [ "node", "server.js" ]