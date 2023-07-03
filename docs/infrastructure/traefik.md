
# Traefik
Load Balancing and Reverse Proxy Management using Docker Containers.


## Further Readings
https://doc.traefik.io/traefik/getting-started/quick-start/

# Code:
```yml
version: "2"
services:
  frontend:
    build: .
    command: npm run start
    volumes:
      - .:/usr/app/
      - /usr/app/node_modules
    labels:
      - "traefik.http.routers.frontend.rule=PathPrefix(`/army`)"
      - "traefik.http.services.frontend.loadbalancer.server.port=3000"
      - "traefik.http.routers.frontend.middlewares=frontend-stripprefix"
      - "traefik.http.middlewares.frontend-stripprefix.stripprefix.prefixes=/army"
    ports:
      - "3000:3000"

  reverse-proxy:
    image: traefik:v2.4
    command: --api.insecure=true --providers.docker
    ports:
      - "80:80"
      - "8080:8080"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    labels:
      - traefik.enable=true
    depends_on:
      - frontend

```
