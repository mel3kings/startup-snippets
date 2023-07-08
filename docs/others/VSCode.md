# VSCode
- IDE for Engineers


## CheckList
### Fullstack Extension Checklist
- [ ] Docker
- [ ] AWS Toolkit
- [ ] Hashicorp
- [ ] Jest Runner

### Language Specific
- [ ] Python 
- [ ] Prettier


## Jest Config for VSCode
- install Jest runner
- babel config should at least have the below:
```js
// babel.config.js
module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "babel-preset-react-app",
    ],
  };
```
- Jest config should have at least the below:
```js
module.exports = {
    transform: {
      '\\.(js|ts|jsx|tsx)$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css)$': 'identity-obj-proxy'
    },
  }
```