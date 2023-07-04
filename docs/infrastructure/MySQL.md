# MySQL
- Very famous all purpose relational database
- https://www.mysql.com/

## How
- Run via Docker, see [Code Section](./MySQL#code)

## Code
```Dockerfile
FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=root
VOLUME mysql-volume:/var/lib/mysql
EXPOSE 3306
```