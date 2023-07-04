# Linting

## Basic Configuration
- Automated and standardized way of Formatting Code.

### Prerequisites
- Installation
- `yarn add -D eslint-config-prettier eslint-plugin-prettier prettier`
- `npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier`

- Automate Linting see (Husky.md)
`yarn add -D husky lint-staged`
`npm install --save-dev husky lint-staged`

### How
- Add to your package.json
```json
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "plugin:prettier/recommended"
    ]
  },
  "prettier": {
    "printWidth": 90,
    "bracketSpacing": true,
    "trailingComma": "es5",
    "semi": false,
    "singleQuote": true
  },
```

- Add to your scripts:
```javascript
"scripts": {
    "lint:fix": "eslint 'src/**/*.js' --fix",
    "lint": "eslint 'src/**/*.js'",
     "prettify": "prettier './src/**/*.{ts,tsx,js,jsx}' --write"
  },
```
