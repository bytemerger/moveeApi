FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
USER node
CMD ["node", "public/index.js"]