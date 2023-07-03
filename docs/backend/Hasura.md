# Hasura
## Hasura-CLI
install hasuri-cli to automatically manage migrations/scripts
```shell
brew install hasura-cli
```

## Scripts
Prerequisites:
- assuming you have the correct `config.yaml file` (change admin secret)
- assuming you are in `hasura-server` folder (`cd hasura-server`)
- Change to the correct values

## Create migration script from existing Schema (will generate `up.sql`)
``` shell
hasura migrate create init --from-server --schema <SCHEMA_NAME>
```

## Create Seed scirpt from existing Tables (This will generate insert scripts for existing data)
``` shell
hasura seeds create initial_data --from-table <TABLE_NAME>

```

## Export DB Metadata
``` shell
hasura metadata export
```


## Apply migrations and seeds (Run this if you have migrations/seeds that are pending)
- To see if you have pending migration run `hasura migrate status`

``` shell
 hasura migrate apply --skip-execution --database-name default 
 hasura seeds apply
```

# Code
- working docker
```yml
version: "3"

services:
  db:
    build: ./database
    container_name: db
    restart: always
    networks:
      - default
    volumes:
      - ./database/volumes/postgres10/data:/var/lib/postgresql/data
      - ./database/volumes/postgres10/backup:/var/lib/postgresql/backup
    ports:
      - ${DB_PORT:-5432}:5432
    env_file: ./configs/postgres.config
  db_hasura:
    image: hasura/graphql-engine:latest
    container_name: db_hasura
    depends_on:
      - db
    restart: always
    networks:
      - default
    command:
      - graphql-engine
      - serve
      - --enable-console
    ports:
      - ${HASURA_GRAPHQL_PORT:-18080}:8080
    env_file: ./configs/hasura.config

networks:
  default:
    external:
      name: main-network

volumes:
  pgadmin_data:
```
- Config.yaml
```yml
version: 3
endpoint: http://localhost:18080
admin_secret:
metadata_directory: metadata
actions:
  kind: synchronous
  handler_webhook_baseurl: http://localhost:3000
```