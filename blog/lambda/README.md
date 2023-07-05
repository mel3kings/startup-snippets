---
slug: Serverless-Dynamo-DB-API
title: Serverless-Dynamo-DB-API
authors: [mel]
tags: [builds, snippet library, dumb, snippet]
---
# Serverless-Dynamo-DB-API

:::tip
Curious what it takes to build a serverless API?
:::


## Raw Source code:
https://github.com/mel3kings/startup-snippets/tree/main/blog/lambda

### Serverless notes
- API gateway needs lambda to have this format in the response to not throw malformed exception:
```
    {
        'statusCode': 200,
        'headers': {
        },
        'body': json.dumps(response_list),
        'isBase64Encoded': 'false'
    }
```

### Lambda
- needs to deploy before testing
- throttle request set to 1 for singleton

### Api gateway
stages - relative path, needs to deploy first before it goes live
- throttle request set to 1 for singleton
