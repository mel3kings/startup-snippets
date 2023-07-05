# React CORS
Cross Origin Resource Sharing

## What?
- for local development usually when you try calling different domain names CORS will prevent you from doing so.
- you need to enable from Client CORS to enable application 

## How?
- Add proxy to your Package.json
"proxy": "https://domain.execute-api.ap-southeast-2.amazonaws.com/",
