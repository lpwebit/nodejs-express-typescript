FROM lpweb/node

ENV NODE_ENV=production

COPY ./dist ./
COPY ./package.json ./

RUN npm install

CMD ["node", "server.js"]
