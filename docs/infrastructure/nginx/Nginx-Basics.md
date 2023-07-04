# Nginx - Basics
- Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
- https://www.nginx.com/


## Prerequisites
- generate .htpasswd via `htpasswd` by apache or https://hostingcanada.org/htpasswd-generator/

## Code
- creates a nginx reverse proxy, with a simple web application behind it, you may need to change your image for the web.

```yml
version: "2"
services:
  nginx:
    container_name: nginx_proxy
    build:
      context: ""
      dockerfile: Dockerfile
    ports:
      - "80:80"
      - "443:443"
  web:
    image: my-web-application:latest
    ports:
      - "3000:80"
```
- Dockerfile
```Dockerfile
# this same shows how we can extend/change an existing official image from Docker Hub

FROM nginx:latest
WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
```
- nginx.conf must be in the same location as Dockerfile
```conf
server {
    listen 80;
    server_name localhost;
    location / {
        proxy_pass http://172.28.0.1:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## How to Configure nginx proxy-pass
- update sites-enbaled files
```shell
/etc/nginx/sites-enabled
  location / {
  # First attempt to serve request as file, then
  # as directory, then fall back to displaying a 404.
  # try_files $uri $uri/ =404;
  proxy_pass http://127.0.0.1:7777/;
  }
```
- add default.conf
- restart nginx


## Shell command to Nginx
- `install nginx: sudo apt install nginx`
