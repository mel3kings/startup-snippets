# DynamoDB

- Serverless NOSQL database from AWS
- Set up with a JS framework (NextJs)

## Setting up CRUD

- https://levelup.gitconnected.com/building-a-next-js-dynamodb-crud-app-4bb2afe0d2f6
- install: `npm i @aws-sdk/client-dynamodb`
- Create IAM with Dynamo full access and set up in `.env`

```
NEXT_PUBLIC_AWS_ACCESS_KEY_ID="Your-access-key"
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY="Your-secret-key"
```

## Configs

- dbclient.js

```js
// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.

const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

export { ddbClient };
```

- ddbDocClient.js

```js
// Create a service client module using ES6 syntax.
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { ddbClient } from "./dbconfig.js";

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

// Create the DynamoDB document client.
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions,
  unmarshallOptions,
});

export { ddbDocClient };
```

## Code

- create table via code

```js
// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../config/dbconfig";

// Set the parameters
export const params = {
  // Add the partionkey and sort key(if needed) together with their types
  AttributeDefinitions: [
    {
      AttributeName: "id", //Primary Key name
      AttributeType: "N", //Type of the primary key
    },
    {
      AttributeName: "dateAdded", //Sort key name
      AttributeType: "S", //Type of the sort key
    },
  ],
  // Declaring which one is primary key and which one is sort key out of above defined attributes.
  // For Primary key -> KeyType = HASH
  // For Sort key -> KeyType = RANGE
  KeySchema: [
    {
      AttributeName: "id", //Primary key name
      KeyType: "HASH",
    },
    {
      AttributeName: "dateAdded", //Sort key name
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
  TableName: "Users", //TABLE_NAME
  StreamSpecification: {
    StreamEnabled: true,
    StreamViewType: "KEYS_ONLY",
  },
};

const CreateTable = () => {
  const run = async () => {
    try {
      const data = await ddbClient.send(new CreateTableCommand(params));
      console.log("Table Created", data);
      alert("Table Created!");
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        className="px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
        onClick={() => run()}
      >
        Create Table
      </button>
    </div>
  );
};

export default CreateTable;
```

- insert data

```js
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../config/ddbDocClient";
import { useRouter } from "next/router";

const styles = {
  inputField:
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
};

const AddData = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const params = {
      TableName: "Users",
      Item: {
        id: Math.floor(Math.random() * 10000),
        dateAdded: new Date().toLocaleString(),
        dateModified: "",
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        city: event.target.city.value,
        phoneNumber: event.target.phoneNumber.value,
      },
    };

    try {
      const data = await ddbDocClient.send(new PutCommand(params));
      console.log("Success - item added", data);
      alert("Data Added Successfully");
      router.push("/viewdata");
      document.getElementById("addData-form").reset();
    } catch (err) {
      console.log("Error", err.stack);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-3xl mb-20">Add Data</p>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-1/3 justify-self-center">
          <form onSubmit={handleSubmit} id="addData-form">
            <div className="form-group mb-6">
              <label htmlFor="firstName" className="form-label inline-block mb-2 text-gray-700">
                First Name
              </label>
              <input type="text" className={styles.inputField} id="firstName" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="lastName" className="form-label inline-block mb-2 text-gray-700">
                Last Name
              </label>
              <input type="text" className={styles.inputField} id="lastName" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">
                City
              </label>
              <input type="text" className={styles.inputField} id="city" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="phoneNumber" className="form-label inline-block mb-2 text-gray-700">
                Phone Number
              </label>
              <input type="number" className={styles.inputField} id="phoneNumber" />
            </div>

            <button
              type="submit"
              className="
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
```

- view and delete data

```js
// Import required AWS SDK clients and commands for Node.js.
import { useEffect, useState } from "react";
import { ddbDocClient } from "../config/ddbDocClient.js";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import Link from "next/link.js";

const Styles = {
  tableHeadings: "text-sm font-medium text-gray-900 px-6 py-4 text-left border-2",
  tableData: "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap",
};

const ViewData = () => {
  let data = [];
  const [tableData, setTableData] = useState([]);

  //   scanning the dynamodb table
  const scanTable = async () => {
    try {
      data = await ddbDocClient.send(new ScanCommand({ TableName: "Users" }));
      setTableData(data.Items);
      console.log("success", data.Items);
    } catch (err) {
      console.log("Error", err);
    }
  };

  //   deleting an item from the table
  const deleteItem = async (primaryKeyValue, sortKeyValue) => {
    try {
      await ddbDocClient.send(
        new DeleteCommand({
          TableName: "Users",
          Key: {
            id: primaryKeyValue, // primarykeyName : primaryKeyValue
            dateAdded: sortKeyValue, // sortkeyName : sortkeyValue
          },
        })
      );
      console.log("Success - item deleted");
      scanTable();
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    scanTable();
  }, []);

  return (
    <div className="container mx-auto py-10 flex flex-col w-screen h-screen items-center">
      <div className="flex w-2/3 justify-end py-4">
        <Link
          href={{
            pathname: "/adddata",
          }}
        >
          <button
            type="button"
            className="inline-block px-6 py-2.5 mr-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add Data
          </button>
        </Link>
      </div>
      <p className="text-3xl">View Data</p>
      <div className="flex flex-col w-2/3 py-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className={Styles.tableHeadings}>
                      id
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      First Name
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      Last Name
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      City
                    </th>
                    <th scope="col" className={Styles.tableHeadings}>
                      Phone Number
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr className="border-b" key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className={Styles.tableData}>{item.firstName}</td>
                      <td className={Styles.tableData}>{item.lastName}</td>
                      <td className={Styles.tableData}>{item.city}</td>
                      <td className={Styles.tableData}>{item.phoneNumber}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                        <Link
                          href={{
                            pathname: "/updatedata",
                            query: {
                              id: item.id,
                              dateAdded: item.dateAdded,
                              firstName: item.firstName,
                              lastName: item.lastName,
                              city: item.city,
                              phoneNumber: item.phoneNumber,
                            },
                          }}
                        >
                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 mr-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={() => deleteItem(item.id, item.dateAdded)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
```
