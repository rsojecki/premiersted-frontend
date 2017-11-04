FROM ubuntu:16.04

RUN apt-get update

### Nginx, curl
RUN apt-get install -y nginx curl

### Node.js
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install -y nodejs

### Copy Nginx configuration file
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

### Building project
WORKDIR /var/www/premiersted
COPY . /var/www/premiersted
RUN npm install
RUN npm run build-prod

CMD ["nginx", "-g", "daemon off;"]
