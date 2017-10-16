FROM ubuntu:16.04

RUN apt-get update

RUN apt-get install -y nginx curl

### Copy Nginx configuration file
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /var/www/premiersted
COPY . /var/www/premiersted

### Node.js
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install -y nodejs

### Build project
WORKDIR /var/www/premiersted
RUN npm install
RUN npm run build-prod

CMD ["nginx", "-g", "daemon off;"]
