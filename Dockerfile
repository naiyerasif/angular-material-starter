# Generate a build
FROM node:10-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN cd /app && npm install
COPY . /app
RUN cd /app && npm run build

# Serve with Nginx
FROM nginx:1.15-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY tools/default.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist/angular-material-starter /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
