FROM nginx:1.13.5
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./dist/public /usr/share/nginx/html
