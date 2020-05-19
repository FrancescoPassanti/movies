# Stage 0
FROM node:10.9 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# Stage 1
FROM nginx:1.13
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
