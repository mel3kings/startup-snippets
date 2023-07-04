# Traefik
- Load Balancing and Reverse Proxy Management using Docker Containers.
- Useful if you have container act a reverse proxy for other containers. Simplified loadbalancing through configuration
- https://doc.traefik.io/traefik/getting-started/quick-start/


## Code:
- The below will run a traefik container and another container.
- Routing is then configured via just labels on the second container.

```yml
version: "2"
services:
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

frontend:
    build: .
    command: npm run start
    volumes:
      - .:/usr/app/
      - /usr/app/node_modules
    labels:
      - "traefik.http.routers.frontend.rule=PathPrefix(`/another-application`)"
      - "traefik.http.services.frontend.loadbalancer.server.port=3000"
      - "traefik.http.routers.frontend.middlewares=frontend-stripprefix"
      - "traefik.http.middlewares.frontend-stripprefix.stripprefix.prefixes=/another-application"
    ports:
      - "3000:3000"

```
