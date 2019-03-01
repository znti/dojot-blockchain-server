FROM node:8

WORKDIR /dojot/nodejs

COPY package.json .
RUN npm install

COPY src ./src
CMD ["npm", "start"]
