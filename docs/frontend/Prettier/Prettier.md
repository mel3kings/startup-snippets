# Prettier
Prettier fixes code formatting and standardizes code standard

## How?
- install prettier in your project:
`npm install --save-dev --save-exact prettier`
- create empty config
`echo {}> .prettierrc.json`
-  create prettier ignore to ignore some folders on your project
```shell
echo '## Ignore artifacts:
build
coverage' > .prettierignore
```


# Code
## Example .prettierignore
```
# Ignore artifacts:
build
coverage
scannerwork
idea
node_modules
```

## Example package.json
```json
{
    "name": "EXAMPLE Package.json",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@testing-library/jest-dom": "^5.11.4",
      "@testing-library/react": "^11.1.0",
      "@testing-library/user-event": "^12.1.10",
      "jest": "^26.6.0",
      "react": "^17.0.2",
      "react-burger-menu": "^3.0.6",
      "react-dom": "^17.0.2",
      "react-favicon": "^0.0.23",
      "react-google-charts": "^3.0.15",
      "react-icons": "^4.7.1",
      "react-markdown": "^8.0.5",
      "react-meta-tags": "^1.0.1",
      "react-parallax-scroll": "0.0.4",
      "react-query": "^3.39.3",
      "react-router-dom": "^5.2.0",
      "react-scripts": "^4.0.3",
      "styled-components": "^5.3.1",
      "tailwindcss": "^3.1.8",
      "web-vitals": "^1.0.1"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build && npx tailwindcss -i ./src/index.css -o ./public/output.css",
      "dev": "npx tailwindcss -i ./src/index.css -o ./public/output.css --watch",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "build-image": "docker build -t mel3kings-site:dev .",
      "docker-build": "docker-compose up -d --build"
    },
    "proxy": "https://8uhh4mqgo8.execute-api.ap-southeast-2.amazonaws.com/",
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "devDependencies": {
      "jest-fetch-mock": "^3.0.3",
      "prettier": "2.8.8"
    },
    "homepage": "./"
  }
  

```