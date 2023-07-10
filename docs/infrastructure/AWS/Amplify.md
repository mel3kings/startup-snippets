# Amplify
- run simple web application serverless from your repo up to production
- useful for spinning up quickly to production to test frontend applications
- https://aws.amazon.com/amplify/


## How
- Add an `amplify.yml` to your repository
- Go to AWS Amplify and connect your repository, this will build and give you a production URL afterwards.

## Code
Sample simple yml file, where `baseDirectory` is the output directory after running the build command
```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - yarn run build
        - echo "REACT_APP_KEY=$REACT_APP_KEY" >> .env
        - echo "DONE SETTING KEY.."
  artifacts:
    baseDirectory: build
    files:
      - "**/*"
  cache:
    paths:
      - node_modules/**/*

```


## Notes
- it comes with Domain settings as well so if you have a domain name ready to go, you can set it up from AWS Amplify too.