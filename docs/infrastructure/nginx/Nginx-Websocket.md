# Nginx Advanced Websocket
- Configure Nginx to connect to websocket
- Useful for Nginx + GraphQL
- https://www.nginx.com/


## Code
Configuration for websocket connections:

- nginx.conf
```shell
 location / {
    proxy_pass http://localhost:18080
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
  }
```

