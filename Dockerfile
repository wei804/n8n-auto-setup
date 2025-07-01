FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN addgroup --system n8n && adduser --system --ingroup n8n n8n
USER n8n
EXPOSE 5678
CMD ["npm", "start"]

add Dockerfile -for Render build
