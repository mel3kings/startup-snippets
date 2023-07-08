# Docker
- Run applications as Containers regardless of what type it is
- useful in avoiding 'it runs on my machine' and deploying anywhere.
- https://www.docker.com/


## Code
### Hot Redploy for local
```yml
version: "3"
services:
  frontend:
    build: .
    container_name: frontend
    command: npm run start
    # below is critical
    volumes:
      - .:/usr/app/
      - /usr/app/node_modules 
    restart: always
    ports:
      - 3000:3000
```

### Configurable Docker file with profiles
```Dockerfile
ARG TYPE=local
ARG BASE_REGISTRY=docker.io
ARG BASE_IMAGE=node
ARG BASE_TAG=16-alpine3.11
ARG CLIENT_REPO=''

FROM ${BASE_REGISTRY}/${BASE_IMAGE}:${BASE_TAG} AS builder
WORKDIR /usr/app
ENV PATH /usr/app/node_modules/:$PATH
COPY package.json ./

FROM builder AS builder-local
RUN echo "building local image"
RUN npm install --quiet

FROM builder AS builder-staging
RUN echo "building staging image"
RUN echo "registry=${CLIENT_REPO}" >> .npmrc
RUN echo "strict-ssl=false" >> .npmrc
RUN npm install --verbose --production

FROM builder-${TYPE} AS final
RUN echo "environment build was for ${TYPE}"
COPY . .
EXPOSE 3000
ENV NODE_OPTIONS=--max_old_space_size=4096
ENTRYPOINT ["npm", "start"]
```