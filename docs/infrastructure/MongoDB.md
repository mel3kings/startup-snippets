# MongoDB
NoSQL Database

## Local
- after running docker compose you can access:
`http://localhost:8081`

- URL String:
`mongodb://localhost:27017/<db_name>`

## CRUD
- Insert:
```shell
db.<db_name>.insertOne({

})
```

- delete all:
```shell
db.<name>.deleteMany({})
```

- select:
```shell
db.<name>.find().pretty();
```

# Code
- Working Docker YML
```yml
# Use root/example as user/password credentials
version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    ports:
      - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
```

## Example data.json
```json
{
  "ID": 111,
  "Company Name": "Company",
  "Location": "California",
  "Market": "US/UK",
  "IPO Date": "2012-04-23T18:25:43.511Z",
  "10K Present": true,
  "10K Filing Data": "",
  "Ticker": "TXH",
  "Zipcode": "12345",
  "Industry": ["Mining", "Baking"],
  "Topics": [""],
  "Financials": {
    "2020": {
      "numberOfEmployees": 1234,
      "Revenue": 20000000,
      "Net Income": "12345",
      "Stock Price": "123",
      "Market Cap": 123
    }
  },
  "Board/Comittee Composition": {
    "FullBoard": {},
    "Audit Committee": {},
    "Other": {},
    "Member": [
      {
        "ID": 1234,
        "Email": "foo@foo.com",
        "Name": "Jack Person"
      }
    ]
  }
}
```