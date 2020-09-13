FROM node:12-alpine as base
ENV NODE_ENV=development

EXPOSE 80

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

FROM base as dev
CMD ["npm", "run", "dev"]

FROM base as prod
ENV NODE_ENV=production
RUN npm install --only=production && npm cache clean --force
CMD ["npm", "start"]
