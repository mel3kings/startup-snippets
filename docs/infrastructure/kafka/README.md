# Kafka ⭐
- Messaging Queue used for distributed systems, widely used for event streaming and for applications at scale.
- https://kafka.apache.org/

## How
- There are several interfaces that enable you to interact with Kafka. Landoop and WurstMeister are a couple of them
### Landoop
- Docker
```shell
docker run --rm -it  -p 2181:2181 -p 3030:3030 -p 8081:8081 -p 8082:8082 -p 8083:8083 -p 9092:9092 -e ADV_HOST=192.168.99.100 -name kafka-dev landoop/fast-data-dev

kafka-topics --create --topic first-topic --zookeeper 192.168.99.100:2181 --replication-factor 1 --partitions 3
```
- Dockerfile
```Dockerfile
FROM landoop/fast-data-dev:latest

ENV ADV_HOST=127.0.0.1

EXPOSE 2181
EXPOSE 8081
EXPOSE 8082
EXPOSE 8083
EXPOSE 9092
EXPOSE 3030
```
### WurstMesiter
- docker
```yml
version: '2'
services:
  zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - "2181:2181"
  kafka:
    image: wurstmeister/kafka
    ports:
      - "9092:9092"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 192.168.99.100
      KAFKA_CREATE_TOPICS: "first_topic:3:2"
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    depends_on:
      - zookeeper
  kafka_2:
    image: wurstmeister/kafka
    ports:
      - "9093:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 192.168.99.100
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    depends_on:
      - zookeeper
```



## Commands 
### List Brokers
`docker exec -ti kafka /usr/bin/broker-list.sh`

### List Topics
`docker exec -ti kafka /opt/kafka/bin/kafka-topics.sh --list --zookeeper zookeeper:2181`

### Create a Topic
`docker exec -ti kafka /opt/kafka/bin/kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic test2`

### List Topics
`docker exec -ti kafka /opt/kafka/bin/kafka-topics.sh --list --zookeeper zookeeper:2181`


## Notes
- zookeeper - zookeeper is in charge of leader election, and coordinating brokers
- Generally Kafka usually run under a zookeeper, and won't work without one
- Zookeeper makes sure that there is always a leader for the brokers, and monitors them
- Kafka environment:
    - KAFKA_CREATE_TOPICS - creates a topic on startup with this format: <topic_name>:<no_of_partition>:<replication_factor>

- Just by specifying replication factor, and with enough brokers, zookeeper handles the rest. This helps with your application's resiliency as it is not dependent in one messaging broker alone
    - KAFKA_ZOOKEEPER_CONNECT - which zookeeper to connect to
    - KAFKA_ADVERTISED_HOST_NAME - host name/ip

- Second Kafka is named kafka_2, notice that under ports, we use a different port number and that we do note create the topic anymore under environment, but connects to the same zookeeper

### Ensuring Replication is done:
`./kafka-console-consumer.sh --bootstrap-server 192.168.99.100:9092 --topic first-topic --from-beginning`

`./kafka-console-consumer.sh --bootstrap-server 192.168.99.100:9093 --topic first-topic --from-beginning`

### NOTES
-  Even if we did not create the topic on the second kafka, we can list out the messages from the 2nd kafka service, this is because we have a replication factor of 2 when we created the topic. Zookeeper is then in charge of picking which kafka broker to replicate the topic to, and since we only have 2 brokers in this instance we can instantly find that the messages are replicated in both brokers.

Possible UI
Topics UI
Schema UI
Connect UI
Kafka Manager
Burrow
Exhibitor
Kafka monitor
Kafka Tools
Kafkat