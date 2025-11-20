FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy
EXPOSE 80

