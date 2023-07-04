# Neo4j
- Graph Database focused more on the relationship of the nodes, common use case is social media platforms to keep track of user relationships. 
- https://neo4j.com/

## Code

### Docker
- Docker command to run
`docker run -p7474:7474 -p7687:7687 -e NEO4J_AUTH=neo4j/s3cr3t neo4j`
- then open http://localhost:7474 to connect with Neo4j Browser

### Sample Queries
```shell
WITH TomH as a
MATCH (a)-[:ACTED_IN]->(m)<-[:DIRECTED]-(d) RETURN a,m,d LIMIT 10;

// select all:
Match (n)-[r]->(m) Return n,r,m

// Just get relationships:
MATCH p=()-[r:ACTED_IN]->() RETURN p LIMIT 100
MATCH (p:Person)-[:ACTED_IN]->(:Movie {title:'The Polar Express'}) RETURN p
```

