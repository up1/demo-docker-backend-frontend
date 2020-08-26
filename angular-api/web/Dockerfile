FROM node:14.8.0-stretch as step1
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build --prod

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=step1 /app/dist/demo /usr/share/nginx/html
