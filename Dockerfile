FROM node:18-alpine AS build-frontend

WORKDIR /app

# Copy frontend package files and install dependencies
# This leverages Docker's layer caching.
COPY frontend/package*.json ./frontend/
RUN npm install --prefix frontend
COPY frontend/ ./frontend/
RUN npm run build --prefix frontend

FROM node:18-alpine


WORKDIR /app


COPY backend/package*.json ./
RUN npm install


COPY backend/ .

COPY --from=build-frontend /app/frontend/dist ./dist


EXPOSE 5001

RUN npm pkg set 'scripts.start'='node server.js'

# The command to run the application
CMD [ "npm", "start" ]