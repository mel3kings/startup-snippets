# Nginx Advanced Webserver
- Setup a secure webserver that requires user/pw
- Useful for hiding content in staging environments
- https://www.nginx.com/

## Prerequisites
- Generate .htpasswd via `htpasswd` by apache or https://hostingcanada.org/htpasswd-generator/

## Code
To create your nginx, have Dockerfile and docker-compose to setup:
- docker-compose.yml:
```yml
version: "2"
services:
  nginx:
    #image: <custom_nginx_image> # custom nginx image is optinal if you want to specify a specific image otherwise it will a default for you
    container_name: nginx_holder
    build: #build tag enables you to use docker-compose build or docker-compose up --build
      context: ""
      dockerfile: Dockerfile
    ports:
    - "80:80"
    - "443:443"
```
- Dockerfile:
```Dockerfile
# this same shows how we can extend/change an existing official image from Docker Hub

FROM nginx:latest
# highly recommend you always pin versions for anything beyond dev/learn

WORKDIR /usr/share/nginx/html
# change working directory to root of nginx webhost using WORKDIR is prefered to using 'RUN cd /some/path'

COPY index.html /etc/nginx/html/index.html
COPY .htpasswd /etc/nginx/.htpasswd
RUN ["chmod", "644", "/etc/nginx/.htpasswd"]

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY test.png /data/images/test.png
# I don't have to specify EXPOSE or CMD because they're in my FROM

```


- nginx.conf - configures both specific urls `/` and `/images` to be secure and ask for password.
```
server {
    location / {
        auth_basic "Secure Site";
        auth_basic_user_file /etc/nginx/.htpasswd;
    }
    location /images/ {
        auth_basic "Secure Site";
        auth_basic_user_file /etc/nginx/.htpasswd;
        root /data;
    }
}
```

- what `.htpasswd` looks like:
```shell
user:{SHA}W6ph5Mm5Pz8GgiULbPgzG37mj9g=
```
